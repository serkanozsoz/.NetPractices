using System.ComponentModel.DataAnnotations;

namespace AdminTemplate.ViewModels.Dashboard
{
    public class CategoryReportViewModel
    {
        [Display(Name="Kategori Adı")]
        public string Name { get; set; }

        [Display(Name = "Kategori Adı")]
        public int ProductCount { get; set; }
    }
}
