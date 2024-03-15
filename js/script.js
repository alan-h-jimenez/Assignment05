window.addEventListener('load', () => {
    const empID = document.getElementById("id")
    const empName = document.getElementById("name")
    const empExt = document.getElementById("ext")
    const empEmail = document.getElementById("email")
    const empDepartment = document.getElementById("department")
    let form = document.getElementById('empForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(`ID: ${empID.value}\nName: ${empName.value}\nExtension: ${empExt.value}\nEmail: ${empEmail.value}\nDepartment: ${empDepartment.value}`)
    })
})