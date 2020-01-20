using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Airplane.Domain.SharedRoot.Repository
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        void Adicionar(TEntity entity);
        void Atualizar(TEntity t);

        TEntity BuscarPorId(int id);
        ICollection<TEntity> BuscarTodos();
        ICollection<TEntity> Buscar(Expression<Func<TEntity, bool>> predicate);
    }
}
