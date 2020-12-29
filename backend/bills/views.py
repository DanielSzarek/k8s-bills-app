from rest_framework import viewsets, permissions

from bills.models import Bill
from bills.serializers import BillSerializer


class BillViewSet(viewsets.ModelViewSet):
    serializer_class = BillSerializer
    queryset = Bill.objects.all().order_by('month_of_bill')
    permission_classes = [permissions.AllowAny]
