﻿using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Airplane.Domain.SharedRoot.Entity;
using Airplane.Domain.SharedRoot.Repository;
using Airplane.Domain.SharedRoot.Service.Interface;
using Airplane.Domain.SharedRoot.UoW.Interfaces;

namespace Airplane.Domain.SharedRoot.Service
{
    public class BaseService<TEntity> : IBaseService<TEntity> where TEntity : EntityBase
    {
        private readonly IBaseRepository<TEntity> _baseRepository;
        private readonly IUnitOfWork _unitOfWork;

        public BaseService(
            IBaseRepository<TEntity> baseRepository,
            IUnitOfWork unitOfWork)
        {
            _baseRepository = baseRepository;
            _unitOfWork = unitOfWork;
        }

        public void Adicionar(TEntity entity)
        {
            _baseRepository.Adicionar(entity);
            _unitOfWork.Commit();
        }

        public void Atualizar(TEntity entity)
        {
            _baseRepository.Atualizar(entity);
            _unitOfWork.Commit();
        }

        public ICollection<TEntity> Buscar(Expression<Func<TEntity, bool>> predicate)
        {
            var result = _baseRepository.Buscar(predicate);
            return result;
        }

        public TEntity BuscarPorId(int id)
        {
            var result = _baseRepository.BuscarPorId(id);
            return result;
        }

        public ICollection<TEntity> BuscarTodos()
        {
            var result = _baseRepository.BuscarTodos();
            return result;
        }

        public void Remover(int id)
        {
            _baseRepository.Remover(id);
            _unitOfWork.Commit();
        }
    }
}
