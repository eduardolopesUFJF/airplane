using Airplane.Domain.SharedRoot.UoW.Interfaces;
using Airplane.Infra.Data.SqlServer.Context;

namespace Airplane.Domain.SharedRoot.UoW
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AirplaneContext _context;

        public UnitOfWork(AirplaneContext context)
        {
            _context = context;
        }

        public bool Commit()
        {
            var rowsAffected = _context.SaveChanges();
            return rowsAffected > 0;
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
