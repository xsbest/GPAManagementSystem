module.exports = {
  selfTestInit: async (data) => {
    const res = await this.$http.post(`'http://81.71.142.81:8080/zongce2/service/s
      ervice_self/service-addscoretype/ServiceAddscoretype'`, data)
    return res
  }
}
