from bills.views import BillViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'bills', BillViewSet, 'bill')

urlpatterns = router.urls
