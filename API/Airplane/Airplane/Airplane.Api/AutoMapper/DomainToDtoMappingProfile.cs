using Airplane.Domain.AirplaneRoot.DTO;
using Airplane.Domain.AirplaneRoot.Entity;
using AutoMapper;

namespace Airplane.Api.AutoMapper
{
    public class DomainToDtoMappingProfile : Profile
    {
        public DomainToDtoMappingProfile()
        {
            CreateMap<AirplaneEntity, AirplaneDTO>();
        }
    }
}
