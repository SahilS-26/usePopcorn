import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
        console.log("CLOSE");
      }

      document.addEventListener("keydown", callBack);
      // Cleanup function
      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [key, action]
  );
}
