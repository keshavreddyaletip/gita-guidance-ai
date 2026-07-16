import { useEffect, useState } from "react";

export default function useReadingProgress() {

  const [progress, setProgress] = useState({

    completed: 32,

    total: 700,

  });

  useEffect(() => {

    // Firebase later

  }, []);

  return {

    progress,

  };

}