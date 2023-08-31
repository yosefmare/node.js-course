const { getUsersInfo, getAddressInfo } = require('../DAL/call-data-api')
const getPhone = require('../DAL/read-json-file')

const createPersonObj = async (id) => {
    const personInfo = await getUsersInfo(id)
    const personAddress = await getAddressInfo(id)
    const phone =  await getPhone.readJsonFile(id)

    return {
        id: personInfo.id,
        name: personInfo.name,
        email: personInfo.email,
        phone: phone.phone,
        address: {
            city: personAddress[0].city,
            country: personAddress[0].country
        }
    }
}

module.exports = {createPersonObj}

