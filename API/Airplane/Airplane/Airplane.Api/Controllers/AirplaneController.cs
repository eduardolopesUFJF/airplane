using Airplane.Domain.AirplaneRoot.DTO;
using Airplane.Domain.AirplaneRoot.Entity;
using Airplane.Domain.SharedRoot.Service.Interface;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Airplane.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AirplaneController : ControllerBase
    {
        private readonly IBaseService<AirplaneEntity> _baseAirplaneService;
        private readonly IMapper _mapper;

        public AirplaneController(
            IBaseService<AirplaneEntity> baseAirplaneService,
            IMapper mapper)
        {
            _baseAirplaneService = baseAirplaneService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var airplanesEntity = _baseAirplaneService.BuscarTodos();
            var airplanesDTO = _mapper.Map<List<AirplaneDTO>>(airplanesEntity);
            return Ok(airplanesDTO);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var airplaneEntity = _baseAirplaneService.BuscarPorId(id);
            var airplaneDTO = _mapper.Map<AirplaneDTO>(airplaneEntity);
            return Ok(airplaneDTO);
        }

        [HttpPost]
        public IActionResult Post(AirplaneDTO airplaneDTO)
        {
            var airplaneEntity = _mapper.Map<AirplaneEntity>(airplaneDTO);
            _baseAirplaneService.Adicionar(airplaneEntity);
            return Ok(airplaneEntity);
        }

        [HttpPut]
        public IActionResult Put(AirplaneDTO airplaneDTO)
        {
            var airplaneEntity = _mapper.Map<AirplaneEntity>(airplaneDTO);
            _baseAirplaneService.Atualizar(airplaneEntity);
            return Ok(airplaneEntity);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _baseAirplaneService.Remover(id);
            return Ok(true);
        }
    }
}
