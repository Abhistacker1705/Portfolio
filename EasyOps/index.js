let data = []
let searchData = []
// sorthandler
$("#name-Header").click(function () {
	data.sort((a, b) => {
		a.name - b.name
	})
	UpdateTable()
})

//event handler functions

function AddToTable() {
	// Append product to the table
	$("#details").append(
		"<tr>" +
			"<td>" +
			data.length +
			"</td>" +
			"<td>" +
			$("#f-name").val() +
			" " +
			$("#l-name").val() +
			"</td>" +
			"<td>" +
			$("#p-num").val() +
			"</td>" +
			"<td>" +
			"<button id=delete-btn onclick='Delete(this);'>" +
			"x" +
			"</button>" +
			"</td>" +
			"</tr>",
	)

	clearForm()
}

function UpdateTable(s = data) {
	//update table when deleted
	$("#details").children("tr").remove()
	s.map((person, index) => {
		$("#details").append(
			"<tr>" +
				"<td>" +
				(index + 1) +
				"</td>" +
				"<td>" +
				person.name +
				"</td>" +
				"<td>" +
				person.Contact +
				"</td>" +
				"<td>" +
				"<button id=delete-btn onclick='Delete(this);'>" +
				"x" +
				"</button>" +
				"</td>" +
				"</tr>",
		)
	})
}

function Delete(param) {
	console.log($(param).parents("td"))
	let shouldDelete = confirm("Do you want to delete")
	if (shouldDelete) {
		$(param).parents("tr").remove()
		$("#f-name").focus()
	} else {
		window.preventDefault()
		$("#f-name").focus()
	}
}

function clearForm() {
	$(".inputs").val("")
	$("#f-name").focus()
}

$("#save--btn").click(function (event) {
	if ($("#f-name").val().length === 0 || $("#l-name").val().length === 0 || $("#p-num").val().length === 0) {
		window.alert("Every inputs must be filled")
	} else {
		let toAddFlag = true
		event.preventDefault()
		let person = {
			name: $("#f-name").val() + " " + $("#l-name").val(),
			Contact: $("#p-num").val(),
		}
		data.map((p) => {
			if (p.name === person.name || p.Contact === person.Contact) {
				window.alert("Duplicate Entries")
				toAddFlag = false
			} else console.log("Duplicate checking going on")
		})
		if (toAddFlag) {
			data.push(person)
			AddToTable()
			console.log(person)
			console.log(data)
		} else {
			clearForm()
		}
	}
})

$("#search-bar").keyup(function () {
	let query = $("#search-bar").val()
	let queryLength = $("#search-bar").val().length
	console.log(queryLength, queryLength)

	searchData = data.filter((d) => {
		return d.name.slice(0, queryLength).toLowerCase().includes(query.toLowerCase())
	})
	console.log(searchData)
	UpdateTable(searchData)
})
