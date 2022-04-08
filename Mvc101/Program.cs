using Mvc101.Services.EmailService;
using Mvc101.Services.SmsService;
using SendGrid.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<ISmsService, WissenSmsService>();
builder.Services.AddSendGrid(options =>
{
    options.ApiKey = "apikey girilmesi gerek";
});
builder.Services.AddScoped<IEmailService,SendGridEmailService>();
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

//IoC Container : instancelar�n kontroll� ve d�zenli gelmesini sa�lar.

//AddScope : Her oturum ba��na 1 tane instance veriyor.

//Dependence injection : ba��ml�l�klar�n ya da servislerin kullan�lmak istedndi�i yerde IoS CONTA�NER taraf�ndan referanslar� atanmas�d�r.

//Polymorphism : G�r�n��leri ayn�, �al��ma bi�imleri farkl� olan nesnelerin �al��ma bi�imidir.

//Loosely Coupled :


//delege : parametresi method olan methodlar.
