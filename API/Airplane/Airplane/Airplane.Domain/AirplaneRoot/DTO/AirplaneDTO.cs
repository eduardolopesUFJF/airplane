using System;

namespace Airplane.Domain.AirplaneRoot.DTO
{
    public class AirplaneDTO
    {
        public int Id { get; set; }
        public string Codigo { get; set; }
        public string Modelo { get; set; }
        public int QuantidadePassageiros { get; set; }
        public DateTime DataCriacao { get; set; }
    }
}
