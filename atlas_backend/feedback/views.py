from rest_framework import viewsets, permissions
from .models import Feedback
from .serializers import FeedbackSerializer
from .permissions import IsFeedbackOwnerOrAdmin

class FeedbackViewSet(viewsets.ModelViewSet):
    serializer_class = FeedbackSerializer
    permission_classes = [permissions.IsAuthenticated, IsFeedbackOwnerOrAdmin]

    def get_queryset(self):
        if self.request.user.is_staff:
            return Feedback.objects.all()
        return Feedback.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
