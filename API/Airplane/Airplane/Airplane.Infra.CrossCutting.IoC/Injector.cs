using Microsoft.Extensions.DependencyInjection;
using Airplane.Domain.SharedRoot.Repository;
using Airplane.Domain.SharedRoot.Service;
using Airplane.Domain.SharedRoot.Service.Interface;
using Airplane.Domain.SharedRoot.UoW;
using Airplane.Domain.SharedRoot.UoW.Interfaces;
using Airplane.Infra.Data.SqlServer.Context;
using Airplane.Infra.Data.SqlServer.Repository;

namespace Airplane.Infra.CrossCutting.IoC
{
    public class Injector
    {
        public static void RegisterServices(IServiceCollection services)
        {
            //UnitOfWork
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            //Infra Data
            services.AddScoped<AirplaneContext>();

            //Services
            services.AddScoped(typeof(IBaseService<>), typeof(BaseService<>));

            //Repository
            services.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));
        }
    }
}
