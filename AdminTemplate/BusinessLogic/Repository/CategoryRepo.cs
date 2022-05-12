using AdminTemplate.BusinessLogic.Repository.Abstracts.EntityFrameworkCore;
using AdminTemplate.Models.Entities;
using AdminTemplate.Data;

namespace AdminTemplate.BusinessLogic.Repository
{
    public class CategoryRepo : RepositoryBase<Category, int>
    {
        public CategoryRepo(MyContext context) : base(context)
        {
        }
    }
}