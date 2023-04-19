import { Request } from "@/types/Request";

class ApiService {
  callUrl(request: Request) {
    console.log(request)
  }
}

export default new ApiService();
