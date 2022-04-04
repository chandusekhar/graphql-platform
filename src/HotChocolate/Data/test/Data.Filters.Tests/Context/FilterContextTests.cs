using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate.Data.Filters.Expressions;
using HotChocolate.Execution;
using HotChocolate.Resolvers;
using HotChocolate.Types;
using Microsoft.Extensions.DependencyInjection;
using Snapshooter.Xunit;
using Xunit;

namespace HotChocolate.Data.Filters;

public class FilterContextTests
{
    [Fact]
    public async Task GetFields_Should_ReturnScalarField()
    {
        // arrange
        IFilterContext? context = null;
        var executor = await new ServiceCollection()
            .AddGraphQL()
            .AddQueryType(x => x
                .Name("Query")
                .Field("test")
                .Type<ListType<ObjectType<Book>>>()
                .UseFiltering()
                .Resolve(x =>
                {
                    context = x.GetFilterContext();
                    return Array.Empty<Book>();
                }))
            .AddFiltering()
            .BuildRequestExecutorAsync();

        // act
        const string query = @"
            {
                test(where: { title: { eq: ""test"" } }) {
                    title
                }
            }
        ";

        await executor.ExecuteAsync(query);

        // assert
        Assert.NotNull(context);
        IFilterFieldInfo field = Assert.Single(context!.GetFields());
        Assert.Empty(context.GetOperations());
        IFilterOperationInfo operation =
            Assert.Single(Assert.IsType<FilterInfo>(field.Value).GetOperations());
        Assert.Empty(Assert.IsType<FilterInfo>(field.Value).GetFields());
        Assert.Equal("title", field.Field.Name);
        Assert.Equal("eq", operation.Field.Name);
        Assert.Equal("test", Assert.IsType<FilterValue>(operation.Value).Value);
    }

    [Fact]
    public async Task GetFields_Should_ReturnScalarFieldWithListOperation()
    {
        // arrange
        IFilterContext? context = null;
        var executor = await new ServiceCollection()
            .AddGraphQL()
            .AddQueryType(x => x
                .Name("Query")
                .Field("test")
                .Type<ListType<ObjectType<Book>>>()
                .UseFiltering()
                .Resolve(x =>
                {
                    context = x.GetFilterContext();
                    return Array.Empty<Book>();
                }))
            .AddFiltering()
            .BuildRequestExecutorAsync();

        // act
        const string query = @"
            {
                test(where: { title: { in: [""a"", ""b""] } }) {
                    title
                }
            }
        ";

        await executor.ExecuteAsync(query);

        // assert
        Assert.NotNull(context);
        IFilterFieldInfo field = Assert.Single(context!.GetFields());
        Assert.Empty(context.GetOperations());
        IFilterOperationInfo operation =
            Assert.Single(Assert.IsType<FilterInfo>(field.Value).GetOperations());
        Assert.Empty(Assert.IsType<FilterInfo>(field.Value).GetFields());
        Assert.Equal("title", field.Field.Name);
        Assert.Equal("in", operation.Field.Name);
        var value =
            Assert.IsType<FilterValue>(operation.Value!).Value as IEnumerable<string>;
        Assert.Equal("a", value!.FirstOrDefault());
        Assert.Equal("b", value!.LastOrDefault());
    }

    [Fact]
    public async Task GetFields_Should_RetunFilterValueCollectionWhenOr()
    {
        // arrange
        IFilterContext? context = null;
        var executor = await new ServiceCollection()
            .AddGraphQL()
            .AddQueryType(x => x
                .Name("Query")
                .Field("test")
                .Type<ListType<ObjectType<Book>>>()
                .UseFiltering()
                .Resolve(x =>
                {
                    context = x.GetFilterContext();
                    return Array.Empty<Book>();
                }))
            .AddFiltering()
            .BuildRequestExecutorAsync();

        // act
        const string query = @"
            {
                test(where: {
                    or: [
                        { title: { eq: ""a"" } }
                        { title: { eq: ""b"" } }
                    ]
                }) {
                    title
                }
            }
        ";

        await executor.ExecuteAsync(query);

        // assert
        Assert.NotNull(context);
        IFilterOperationInfo operation = Assert.Single(context!.GetOperations());
        Assert.Empty(context!.GetFields());
        var valueCollection = Assert.IsType<FilterValueCollection>(operation.Value);
        var field0 = Assert.Single(Assert.IsType<FilterInfo>(valueCollection[0]).GetFields());
        Assert.Equal("title", field0.Field.Name);
        var operation0 = Assert.Single(Assert.IsType<FilterInfo>(field0.Value).GetOperations());
        Assert.Equal("eq", operation0.Field.Name);
        Assert.Equal("a", Assert.IsType<FilterValue>(operation0.Value).Value);
        var field1 = Assert.Single(Assert.IsType<FilterInfo>(valueCollection[1]).GetFields());
        Assert.Equal("title", field1.Field.Name);
        var operation1 = Assert.Single(Assert.IsType<FilterInfo>(field1.Value).GetOperations());
        Assert.Equal("eq", operation1.Field.Name);
        Assert.Equal("b", Assert.IsType<FilterValue>(operation1.Value).Value);
    }

    [Fact]
    public async Task GetFields_Should_ReturnDeepObject()
    {
        // arrange
        IFilterContext? context = null;
        var executor = await new ServiceCollection()
            .AddGraphQL()
            .AddQueryType(x => x
                .Name("Query")
                .Field("test")
                .Type<ListType<ObjectType<Book>>>()
                .UseFiltering()
                .Resolve(x =>
                {
                    context = x.GetFilterContext();
                    return Array.Empty<Book>();
                }))
            .AddFiltering()
            .BuildRequestExecutorAsync();

        // act
        const string query = @"
            {
                test(where: { author: { name: { eq: ""test"" } } }) {
                    title
                }
            }
        ";

        await executor.ExecuteAsync(query);

        // assert
        Assert.NotNull(context);
        IFilterFieldInfo author = Assert.Single(context!.GetFields());
        Assert.Empty(context.GetOperations());
        IFilterFieldInfo name = Assert.Single(Assert.IsType<FilterInfo>(author.Value).GetFields());
        Assert.Empty(Assert.IsType<FilterInfo>(author.Value).GetOperations());
        IFilterOperationInfo operation =
            Assert.Single(Assert.IsType<FilterInfo>(name.Value).GetOperations());
        Assert.Empty(Assert.IsType<FilterInfo>(name.Value).GetFields());
        Assert.Equal("author", author.Field.Name);
        Assert.Equal("name", name.Field.Name);
        Assert.Equal("eq", operation.Field.Name);
        Assert.Equal("test", Assert.IsType<FilterValue>(operation.Value).Value);
    }

    [Fact]
    public async Task GetFields_Should_ReturnOrOperations()
    {
        // arrange
        IFilterContext? context = null;
        var executor = await new ServiceCollection()
            .AddGraphQL()
            .AddQueryType(x => x
                .Name("Query")
                .Field("test")
                .Type<ListType<ObjectType<Book>>>()
                .UseFiltering()
                .Resolve(x =>
                {
                    context = x.GetFilterContext();
                    return Array.Empty<Book>();
                }))
            .AddFiltering()
            .BuildRequestExecutorAsync();

        // act
        const string query = @"
            {
                test(where: {
                    and: [
                        {
                            title: {
                                in: [""a"", ""b""]
                            }
                            author: {
                                name: {
                                    eq: ""test""
                                    neq: ""test""
                                }
                            }
                        }
                        { pages: { eq: 1 } }
                        { isActive: { eq: true } }
                    ],
                    or: [
                        { title: { eq: ""a"" } }
                        { title: { eq: ""b"" } }
                    ]
                }) {
                    title
                }
            }
        ";

        await executor.ExecuteAsync(query);

        // assert
        Assert.NotNull(context);
        context!.ToDictionary().MatchSnapshot();
    }

    [Fact]
    public async Task EnableFilterExecution_Should_EnableFilterExecution()
    {
        IImmutableDictionary<string, object?>? localContextData = null;
        // arrange
        var executor = await new ServiceCollection()
            .AddGraphQL()
            .AddQueryType(x => x
                .Name("Query")
                .Field("test")
                .Type<ListType<ObjectType<Book>>>()
                .UseFiltering()
                .Resolve(x =>
                {
                    x.GetFilterContext()?.EnableFilterExecution();
                    localContextData = x.LocalContextData.Add("foo", true);

                    return Array.Empty<Book>();
                }))
            .AddFiltering()
            .BuildRequestExecutorAsync();

        // act
        const string query = @"
            {
                test(where: {
                    title: {
                        in: [""a"", ""b""]
                    }
                    author: {
                        name: {
                            eq: ""test""
                            neq: ""test""
                        }
                    }
                }) {
                    title
                }
            }
        ";

        await executor.ExecuteAsync(query);

        // assert
        Assert.NotNull(localContextData);
        Assert.False(localContextData!.ContainsKey(QueryableFilterProvider.SkipFilteringKey));
    }

    [Fact]
    public async Task EnableFilterExecution_Should_DisableFilterExecutionByDefault()
    {
        IImmutableDictionary<string, object?>? localContextData = null;
        // arrange
        var executor = await new ServiceCollection()
            .AddGraphQL()
            .AddQueryType(x => x
                .Name("Query")
                .Field("test")
                .Type<ListType<ObjectType<Book>>>()
                .UseFiltering()
                .Resolve(x =>
                {
                    x.GetFilterContext();
                    localContextData = x.LocalContextData.Add("foo", true);

                    return Array.Empty<Book>();
                }))
            .AddFiltering()
            .BuildRequestExecutorAsync();

        // act
        const string query = @"
            {
                test(where: {
                    title: {
                        in: [""a"", ""b""]
                        eq: null
                    }
                    author: {
                        name: {
                            eq: ""test""
                            neq: ""test""
                        }
                    }
                }) {
                    title
                }
            }
        ";

        await executor.ExecuteAsync(query);

        // assert
        Assert.NotNull(localContextData);
        Assert.True(localContextData!.ContainsKey(QueryableFilterProvider.SkipFilteringKey));
    }

    [Fact]
    public async Task GetFilterContext_ReturnNullWhenNoFiltering()
    {
        var obj = new object();

        // arrange
        var executor = await new ServiceCollection()
            .AddGraphQL()
            .AddQueryType(x => x
                .Name("Query")
                .Field("test")
                .Type<ListType<ObjectType<Book>>>()
                .Resolve(x =>
                {
                    obj = x.GetFilterContext();
                    return Array.Empty<Book>();
                }))
            .AddFiltering()
            .BuildRequestExecutorAsync();

        // act
        const string query = @"
            {
                test {
                    title
                }
            }
        ";

        await executor.ExecuteAsync(query);

        // assert
        Assert.Null(obj);
    }

    [Fact]
    public async Task FilterContext_Should_NotFail_When_FilterArgumentIsNotProvided()
    {
        // arrange
        IFilterContext? context = null;
        var executor = await new ServiceCollection()
            .AddGraphQL()
            .AddQueryType(x => x
                .Name("Query")
                .Field("test")
                .Type<ListType<ObjectType<Book>>>()
                .UseFiltering()
                .Resolve(x =>
                {
                    context = x.GetFilterContext();
                    return Array.Empty<Book>();
                }))
            .AddFiltering()
            .BuildRequestExecutorAsync();

        // act
        const string query = @"
            {
                test {
                    title
                }
            }
        ";

        await executor.ExecuteAsync(query);

        // assert
        Assert.NotNull(context);
        context!.ToDictionary().MatchSnapshot();
    }

    public class Book
    {
        public int Id { get; set; }

        public string? Title { get; set; }

        public int Pages { get; set; }

        public int Chapters { get; set; }

        public bool IsActive { get; set; }

        public Author? Author { get; set; }

        public Author[]? CoAuthor { get; set; }
    }

    public class Author
    {
        public int Id { get; set; }

        public string? Name { get; set; }
    }
}