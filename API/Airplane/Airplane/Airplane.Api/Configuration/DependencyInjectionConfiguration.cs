using Microsoft.Extensions.DependencyInjection;
using Airplane.Infra.CrossCutting.IoC;

namespace Airplane.Api.Configuration
{
    public static class DependencyInjectionConfiguration
    {
        public static void AddDIConfiguration(this IServiceCollection services)
        {
            Injector.RegisterServices(services);
        }
    }
}
