import time


class RequestDetectionMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        start_time = time.time()

        method = request.method
        path = request.path
        ip_address = request.META.get("REMOTE_ADDR", "Unknown")
        user_agent = request.META.get("HTTP_USER_AGENT", "Unknown")

        response = self.get_response(request)

        processing_time = (time.time() - start_time) * 1000

        print("\n----- Request Detection -----")
        print(f"Method: {method}")
        print(f"Path: {path}")
        print(f"IP Address: {ip_address}")
        print(f"User Agent: {user_agent}")
        print(f"Processing Time: {processing_time:.2f} ms")
        print("-----------------------------\n")

        return response