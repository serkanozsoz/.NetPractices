namespace AdminTemplate.ViewModels;

public class UpdateProfilePasswordViewModel
{
    //Multiviewmodel : aynı sayfada iki farklı işlem yapılmak isteniyorsa (Profil düzenleme ve password değiştirme : 2 Buton ) 2 veya daha fazla farklı viewodel 1 viewmodel içerisinde toplamaya denir.
    public UserProfileViewModel? UserProfileVM { get; set; }
    public ChangePasswordViewModel? ChangePasswordVM { get; set; }
}