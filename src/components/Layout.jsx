import { useState } from "react";
import {NavLink,useLocation,useNavigate,} from "react-router-dom";
import {Search,Sun,Moon,Bell,Menu,X,LogOut,} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { navItems } from "../data";
import * as I from "lucide-react";

export default function Layout({ children }) {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState(false);
  const [q, setQ] = useState("");

  const nav = useNavigate();
  const loc = useLocation();

  const icon = (name) => I[name] || I.Home;
  const getPath = (path) => (path === "/market" ? "/" : path);

  const active = (path) => {
    const actualPath = getPath(path);
    return actualPath === "/"
      ? loc.pathname === "/"
      : loc.pathname.startsWith(actualPath);
  };

  const search = (e) => {
    e.preventDefault();
    if (q.trim()) {
      nav(`/?search=${encodeURIComponent(q.trim())}`);
    }
  };

  const Navigation = ({ mobile = false }) => (
    <nav
      className={
        mobile
          ? "mt-8 space-y-1"
          : "mt-12 flex flex-1 flex-col items-center gap-7"
      }
    >
      {navItems.map(([label, path, ic]) => {
        const C = icon(ic);
        const actualPath = getPath(path);

        return (
          <NavLink
            key={`${label}-${path}`}
            to={actualPath}
            title={!mobile ? label : undefined}
            onClick={mobile ? () => setOpen(false) : undefined}
            className={
              mobile
                ? `flex items-center gap-3 rounded-lg px-3 py-3 text-base ${
                    active(path)
                      ? "bg-[#7147f5] text-white"
                      : "muted"
                  }`
                : `grid h-7 w-7 place-items-center rounded-md ${
                    active(path)
                      ? "bg-[#7147f5] text-white"
                      : "muted hover:bg-[var(--card)]"
                  }`
            }
          >
            <C size={mobile ? 17 : 16} />
            {mobile && label}
          </NavLink>
        );
      })}
    </nav>
  );

  return (
    <div className="shell">
      {/* DESKTOP SIDEBAR */}
      <aside className="sidebar fixed inset-y-0 left-0 z-50 hidden w-[78px] flex-col items-center border-r lg:flex">
        <NavLink
          to="/"
          className="mt-7 grid h-8 w-8 place-items-center rounded-md bg-[#7147f5] font-bold text-white"
        >
          ◉
        </NavLink>

        <Navigation />

        <button
          type="button"
          onClick={() => nav("/")}
          className="mb-7 muted"
        >
          <LogOut size={17} />
        </button>
      </aside>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <aside
            className="h-full w-[270px] bg-[var(--sidebar)] p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="grid h-8 w-8 place-items-center rounded bg-[#7147f5] text-white"
              >
                ◉
              </NavLink>

              <button
                type="button"
                onClick={() => setOpen(false)}
              >
                <X />
              </button>
            </div>

            <Navigation mobile />
          </aside>
        </div>
      )}

      {/* HEADER */}
      <header className="fixed left-0 right-0 top-0 z-40 flex h-[78px] items-center bg-[var(--bg)] px-5 lg:left-[78px] lg:px-[30px]">
        <div className="flex w-full items-center gap-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full lg:hidden"
          >
            <Menu />
          </button>

          <form
            onSubmit={search}
            className="search flex h-[38px] w-[270px] items-center rounded-[9px] pl-3 max-lg:flex-1 lg:w-[270px]"
          >
            <Search size={18} className="muted" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full bg-transparent px-3 text-[15px] outline-none"
              placeholder="Search Here"
            />
          </form>
          <div className="ml-auto flex items-center gap-3">
            {/* THEME */}
            <button
              type="button"
              onClick={toggleTheme}
              className="muted"
            >
              {theme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>

            {/* NOTIFICATIONS */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setNote((v) => !v)}
                className="muted"
              >
                <Bell size={16} />
              </button>

              {note && (
                <div className="card absolute right-0 top-8 w-56 rounded-xl border border-app p-3 text-[15px] shadow-xl">
                  <b>Notifications</b>

                  <p className="mt-2 muted">
                    Purchase by you for 0.05 ETH
                  </p>

                  <p className="mt-2 muted">
                    Papaya started following you
                  </p>
                </div>
              )}
            </div>

            {/* PROFILE */}
            <button
              type="button"
              onClick={() => nav("/profile")}
            >
              <img
                src="/assets/figma-navbar-profile.jpg"
                alt="profile"
                className="h-[32px] w-[32px] rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="pb-20 pl-0 pt-[78px] lg:pl-[78px]">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-5 sm:px-6 lg:px-7">
          {children}
        </div>
      </main>

      {/* MOBILE BOTTOM NAV */}
      <nav className="card fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-app lg:hidden">
        {navItems.slice(0, 6).map(([label, path, ic]) => {
          const C = icon(ic);

          return (
            <NavLink
              key={`${label}-${path}`}
              to={getPath(path)}
              className={active(path) ? "text-[#7147f5]" : "muted"}
            >
              <C size={20} />
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}