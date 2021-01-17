from django.db import models
from django.utils.translation import gettext_lazy as _


class Bill(models.Model):
    class BillType(models.TextChoices):
        WATER = 'W', _('Woda')
        POWER = 'P', _('Prąd')

    bill_type = models.CharField(
        max_length=1,
        choices=BillType.choices,
        default=BillType.WATER,
    )

    add_date = models.DateTimeField(_("Data dodania"), auto_now_add=True)
    mod_date = models.DateTimeField(_("Data modyfikacji"), auto_now=True)

    month_of_bill = models.PositiveSmallIntegerField(_("Miesiąc rozliczeniowy"))
    year_of_bill = models.PositiveSmallIntegerField(_("Rok rozliczeniowy"))
    register_value = models.FloatField(_("Wartość licznika"))
    bill_amount = models.DecimalField(_("Wartość rachunku"), max_digits=6, decimal_places=2)

    class Meta:
        db_table = "bill"
        unique_together = ("bill_type", "month_of_bill", "year_of_bill")
