using Mvc101.Services.EmailService;
using Mvc101.Services.SmsService;
using SendGrid.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<ISmsService, WissenSmsService>();
builder.Services.AddSendGrid(options =>
{
    options.ApiKey = "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";
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

//IoC Container : instancelarýn kontrollü ve düzenli gelmesini saðlar.

//AddScope : Her oturum baþýna 1 tane instance veriyor.

//Dependence injection : baðýmlýlýklarýn ya da servislerin kullanýlmak istedndiði yerde IoS CONTAÝNER tarafýndan referanslarý atanmasýdýr.

//Polymorphism : Görünüþleri ayný, çalýþma biçimleri farklý olan nesnelerin çalýþma biçimidir.

//Dependence Inversion : 
