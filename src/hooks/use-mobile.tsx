import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(window.innerWidth < MOBILE_BREAKPOINT)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    // Modern
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange)
      return () => mql.removeEventListener("change", onChange)
    }

    // Fallback for older browsers
    mql.addListener(onChange)
    return () => mql.removeListener(onChange)
  }, [])

  return isMobile
}
