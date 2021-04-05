function useAuth(): boolean {
  const token = localStorage.getItem('bearerToken');

  return token ? true : false;
}

export default useAuth;
