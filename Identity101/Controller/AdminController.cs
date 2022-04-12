using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Identity101.Controllers;

[Authorize(Roles = "Admin")]
public class AdminController : Controller
{
    //[AllowAnonymous]  = Admin de user de herkes bunu yapınca görebilir.  [Athorize] sadece login olmuş kişi görebilir.
    public IActionResult Index()
    {
        return View();
    }
}