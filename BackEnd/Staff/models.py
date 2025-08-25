# from django.db import models
# from Users.models import User

# class Staff(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="staff_profile")
#     position = models.CharField(max_length=100, null=False, blank=False)

#     def __str__(self):
#         return f"Staff: {self.user.get_full_name()} - {self.position}"
