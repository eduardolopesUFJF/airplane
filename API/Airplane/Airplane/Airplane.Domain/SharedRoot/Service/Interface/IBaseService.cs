using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Airplane.Domain.SharedRoot.Service.Interface
{
    public interface IBaseService<TEntity> where TEntity : class
    {
        void Adicionar(TEntity entity);
        void Atualizar(TEntity entity);
        void Remover(int id);

        TEntity BuscarPorId(int id);
        ICollection<TEntity> BuscarTodos();
        ICollection<TEntity> Buscar(Expression<Func<TEntity, bool>> predicate);

    }
}
