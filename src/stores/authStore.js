import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
  isAuthenticated: () => !!set((state) => state.user),
}));

export default useAuthStore;