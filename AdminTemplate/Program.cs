using AdminTemplate.Data;
using AdminTemplate.Models.Identity;
using AdminTemplate.Services.Email;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using AdminTemplate.BusinessLogic.Repository;
using AdminTemplate.BusinessLogic.Repository.Abstracts;
using AdminTemplate.MappingProfiles;
using AdminTemplate.Models.Entities;

var builder = WebApplication.CreateBuilder(args);
var con1 = builder.Configuration.GetConnectionString("con1");
builder.Services.AddDbContext<MyContext>(options => options.UseSqlServer(con1));

#region Identity

builder.Services.AddIdentity<ApplicationUser, ApplicationRole>(options =>
{
    // Password settings.
    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
    options.Password.RequiredLength = 6;
    options.Password.RequiredUniqueChars = 1;

    // Lockout settings.
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
    options.Lockout.MaxFailedAccessAttempts = 3;
    options.Lockout.AllowedForNewUsers = false;

    // User settings.
    options.User.AllowedUserNameCharacters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._";
    options.User.RequireUniqueEmail = true;
}).AddEntityFrameworkStores<MyContext>()
    .AddDefaultTokenProviders();

builder.Services.ConfigureApplicationCookie(options =>
{
    // Cookie settings
    options.Cookie.HttpOnly = true;
    options.ExpireTimeSpan = TimeSpan.FromMinutes(60);

    options.LoginPath = "/Account/Login";
    options.AccessDeniedPath = "/Account/AccessDenied";
    options.SlidingExpiration = true;
});

#endregion

builder.Services.AddTransient<IEmailService, SmtpEmailService>();

#region Repositories

builder.Services.AddScoped<IRepository<Product, Guid>, ProductRepo>();
builder.Services.AddScoped<IRepository<Category, int>, CategoryRepo>();

#endregion


builder.Services.AddControllersWithViews().AddRazorRuntimeCompilation()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    });

//builder.Services.AddAutoMapper(options => options.AddMaps("AdminTemplate.MappingProfiles"));
builder.Services.AddAutoMapper(options =>
{
    options.AddProfile<EntityMappingProfile>();
});

builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseSession();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();