import { useState } from "react";

export default function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()));
  return (
    <div>
      <span>Time:{now.toLocaleString()}</span>
    </div>
  );
}
