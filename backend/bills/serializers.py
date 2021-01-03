from rest_framework import serializers
from bills.models import Bill


class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = (
            'id',
            'add_date',
            'mod_date',
            'bill_type',
            'month_of_bill',
            'year_of_bill',
            'register_value',
            'bill_amount',
        )
