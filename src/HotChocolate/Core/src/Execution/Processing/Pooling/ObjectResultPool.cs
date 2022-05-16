using Microsoft.Extensions.ObjectPool;

namespace HotChocolate.Execution.Processing.Pooling;

internal sealed class ObjectResultPool : DefaultObjectPool<ResultBuffer<ObjectResult>>
{
    public ObjectResultPool(int maximumRetained, int maxAllowedCapacity = 256)
        : base(new BufferPolicy(maxAllowedCapacity), maximumRetained)
    {
    }

    private sealed class BufferPolicy : PooledObjectPolicy<ResultBuffer<ObjectResult>>
    {
        private readonly ObjectPolicy _objectPolicy;

        public BufferPolicy(int maxAllowedCapacity)
        {
            _objectPolicy = new ObjectPolicy(maxAllowedCapacity);
        }

        public override ResultBuffer<ObjectResult> Create()
            => new(16, _objectPolicy);

        public override bool Return(ResultBuffer<ObjectResult> obj)
        {
            obj.Reset();
            return true;
        }
    }

    private sealed class ObjectPolicy : PooledObjectPolicy<ObjectResult>
    {
        private readonly int _maxAllowedCapacity;

        public ObjectPolicy(int maxAllowedCapacity)
        {
            _maxAllowedCapacity = maxAllowedCapacity;
        }

        public override ObjectResult Create() => new();

        public override bool Return(ObjectResult obj)
        {
            if (obj.Capacity > _maxAllowedCapacity)
            {
                obj.Reset();
                return false;
            }

            obj.Reset();
            return true;
        }
    }
}