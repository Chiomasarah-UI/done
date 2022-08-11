from django.forms import ModelForm
from django.contrib.auth.models import User
from django.utils.translation import gettext as _


class SigninUserForm(ModelForm):
    """The SignIn Form"""
    class Meta:
        model = User
        fields = ['username', 'password']
        error_messages = {
            'username': {
                'unique': _('Enter another username. This one is taken')
            }
        }
