import { Component } from "react";
import InternalServerError from "../page/Errors/500/InternalServerError";

class AppErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application render error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <InternalServerError />;
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;