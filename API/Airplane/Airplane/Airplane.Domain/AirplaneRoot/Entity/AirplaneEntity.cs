using Airplane.Domain.SharedRoot.Entity;

namespace Airplane.Domain.AirplaneRoot.Entity
{
    public class AirplaneEntity : EntityBase
    {
        public string Codigo { get; set; }
        public string Modelo { get; set; }
        public int QuantidadePassageiros { get; set; }
    }
}
