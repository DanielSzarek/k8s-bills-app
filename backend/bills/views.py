from rest_framework import viewsets, permissions, status
from rest_framework.response import Response

from bills.models import Bill
from bills.serializers import BillSerializer


class BillViewSet(viewsets.ModelViewSet):
    serializer_class = BillSerializer
    queryset = Bill.objects.all().order_by('year_of_bill', 'month_of_bill')
    permission_classes = [permissions.AllowAny]

    def list(self, request, *args, **kwargs):
        bill_type = self.request.query_params.get('type', None)
        if bill_type:
            bill_type = bill_type.upper()
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        queryset = Bill.objects.filter(bill_type=bill_type).order_by('year_of_bill', 'month_of_bill')
        serializer = BillSerializer(queryset, many=True)
        return Response(serializer.data)
