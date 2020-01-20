using Airplane.Domain.AirplaneRoot.DTO;
using Airplane.Domain.AirplaneRoot.Entity;
using AutoMapper;

namespace Airplane.Api.AutoMapper
{
    public class DtoToDomainMappingProfile : Profile
    {
        public DtoToDomainMappingProfile()
        {
            CreateMap<AirplaneDTO, AirplaneEntity>();
        }
    }
}
