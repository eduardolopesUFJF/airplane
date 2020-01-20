using Airplane.Domain.AirplaneRoot.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airplane.Infra.Data.SqlServer.Mappings
{
    public class AirplaneMap : IEntityTypeConfiguration<AirplaneEntity>
    {
        public void Configure(EntityTypeBuilder<AirplaneEntity> builder)
        {
            builder.ToTable("Airplane");
        }
    }
}
