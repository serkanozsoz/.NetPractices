using AdminTemplate.BusinessLogic.Repository.Abstracts.EntityFrameworkCore;
using AdminTemplate.Models.Entities;
using AdminTemplate.Data;

namespace AdminTemplate.BusinessLogic.Repository
{
    public class ProductRepo : RepositoryBase<Product, Guid>
    {
        public ProductRepo(MyContext context) : base(context)
        {
        }
    }
}
