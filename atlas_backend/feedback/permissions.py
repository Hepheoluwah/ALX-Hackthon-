from rest_framework import permissions

class IsFeedbackOwnerOrAdmin(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.is_staff or obj.user == request.user
