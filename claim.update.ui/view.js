var claimsData = [];
// var claimsData = [
//     { "ID": "001", "Name": "Claim 1", Status: [{ "ID": "001", "Name": "Open" }, { "ID": "002", "Name": "Closed" }] },
//     { "ID": "002", "Name": "Claim 2", Status: [{ "ID": "001", "Name": "Open" }, { "ID": "002", "Name": "Closed" }] },
//     { "ID": "003", "Name": "Claim 3", Status: [{ "ID": "001", "Name": "Open" }, { "ID": "002", "Name": "Closed" }] },
// ];

// getAllClaimsDummyData = () => {
//     var element = document.getElementById('sltClaim');
//      element.innerHTML ="<option>Select Claim</option>";
//     claimsData.forEach(obj => {
//         element.innerHTML = element.innerHTML +
//             '<option value="' + obj.ID+ '">' + obj.Name + '</option>';
//     });
// }

selectClaim = (ele) => {
    let val = ele.options[ele.selectedIndex].dataset['status'];
    console.log(val)
    $("#sltStatus").val(val);
}

// selectStaus = (ele) => {
//     var msg = document.getElementById('msg');
//     var time = document.getElementById('time');
//     msg.innerHTML = ele.options[ele.selectedIndex].text + '';
//     time.innerHTML =  new Date().getHours() + ':' + new Date().getMinutes() ;
// }

function getAllClaims() {
    let start = performance.now();
    $.get('http://localhost:9191/fetch/claims', function (data) {
        // var str = '<select id="id" class="form-select form-select-lg mb-3">';
        // data.forEach(element => {
        //     str += "<option value='" + element.id + "'>" + element.fsd0005 + "</option>";
        // });
        // str += "</select>";
        claimsData = data;
        // claimsData = [
        //     {
        //         "id": 1,
        //         "fsd0003": "20200614",
        //         "fsk0102": "20210613",
        //         "fsk0101": 1,
        //         "fpo0101": 10101,
        //         "fsd0005": "1A1",
        //         "fsk0103": "20210614",
        //         "fsk0109": "1"
        //     },
        //     {
        //         "id": 2,
        //         "fsd0003": "20200615",
        //         "fsk0102": "20210613",
        //         "fsk0101": 1,
        //         "fpo0101": 11101,
        //         "fsd0005": "2B2",
        //         "fsk0103": "20210614",
        //         "fsk0109": "0"
        //     },
        //     {
        //         "id": 12,
        //         "fsd0003": "20210508",
        //         "fsk0102": "20210306",
        //         "fsk0101": 11,
        //         "fpo0101": 10020,
        //         "fsd0005": "1V7",
        //         "fsk0103": "20210308",
        //         "fsk0109": "0"
        //     },
        //     {
        //         "id": 3,
        //         "fsd0003": "20210601",
        //         "fsk0102": "20210221",
        //         "fsk0101": 4,
        //         "fpo0101": 10101,
        //         "fsd0005": "3C3",
        //         "fsk0103": "20210223",
        //         "fsk0109": "0"
        //     },
        //     {
        //         "id": 17,
        //         "fsd0003": "20210603",
        //         "fsk0102": "20210613",
        //         "fsk0101": 1,
        //         "fpo0101": 1012,
        //         "fsd0005": "5T5",
        //         "fsk0103": "20210615",
        //         "fsk0109": "0"
        //     },
        //     {
        //         "id": 16,
        //         "fsd0003": "20210604",
        //         "fsk0102": "20210317",
        //         "fsk0101": 1,
        //         "fpo0101": 10171,
        //         "fsd0005": "RP7",
        //         "fsk0103": "20210615",
        //         "fsk0109": "0"
        //     },
        //     {
        //         "id": 15,
        //         "fsd0003": "20210605",
        //         "fsk0102": "20210317",
        //         "fsk0101": 1,
        //         "fpo0101": 14501,
        //         "fsd0005": "RP4",
        //         "fsk0103": "20210615",
        //         "fsk0109": "0"
        //     },
        //     {
        //         "id": 14,
        //         "fsd0003": "20210606",
        //         "fsk0102": "20210611",
        //         "fsk0101": 2,
        //         "fpo0101": 44444,
        //         "fsd0005": "3A6",
        //         "fsk0103": "20210614",
        //         "fsk0109": "0"
        //     },
        //     {
        //         "id": 13,
        //         "fsd0003": "20210607",
        //         "fsk0102": "20210611",
        //         "fsk0101": 2,
        //         "fpo0101": 14101,
        //         "fsd0005": "3A3",
        //         "fsk0103": "20210614",
        //         "fsk0109": "0"
        //     },
        //     {
        //         "id": 10,
        //         "fsd0003": "20210609",
        //         "fsk0102": "20210306",
        //         "fsk0101": 11,
        //         "fpo0101": 77777,
        //         "fsd0005": "8V7",
        //         "fsk0103": "20210308",
        //         "fsk0109": "0"
        //     },
        //     {
        //         "id": 11,
        //         "fsd0003": "20210610",
        //         "fsk0102": "20210306",
        //         "fsk0101": 11,
        //         "fpo0101": 64562,
        //         "fsd0005": "9V7",
        //         "fsk0103": "20210308",
        //         "fsk0109": "1"
        //     },
        //     {
        //         "id": 9,
        //         "fsd0003": "20210611",
        //         "fsk0102": "20210306",
        //         "fsk0101": 11,
        //         "fpo0101": 22222,
        //         "fsd0005": "7V7",
        //         "fsk0103": "20210308",
        //         "fsk0109": "1"
        //     },
        //     {
        //         "id": 6,
        //         "fsd0003": "20210612",
        //         "fsk0102": "20210615",
        //         "fsk0101": 1,
        //         "fpo0101": 54673,
        //         "fsd0005": "6P9",
        //         "fsk0103": "20210615",
        //         "fsk0109": "0"
        //     },
        //     {
        //         "id": 4,
        //         "fsd0003": "20210613",
        //         "fsk0102": "20210503",
        //         "fsk0101": 1,
        //         "fpo0101": 10141,
        //         "fsd0005": "4D4",
        //         "fsk0103": "20210614",
        //         "fsk0109": "0"
        //     },
        //     {
        //         "id": 5,
        //         "fsd0003": "20210615",
        //         "fsk0102": "20210503",
        //         "fsk0101": 1,
        //         "fpo0101": 23456,
        //         "fsd0005": "5F5",
        //         "fsk0103": "20210614",
        //         "fsk0109": "0"
        //     }
        // ];

        var element = document.getElementById('sltClaim');
        element.innerHTML ="<option value='-1'>Select Claim</option>";
        claimsData.forEach(obj => {
            element.innerHTML = element.innerHTML +
                '<option value="' + obj.id+ '" data-status="' + obj.fsk0109 + '">' + obj.fsk0101 + '</option>';
        });

        //$("#claim_cont").empty().append(str);
        let end = performance.now();

        let str1 = "Fetched All Claims in:" + (end - start) + "ms";
        $("#msg").text(str1);
    });
}

function selectStaus() {
	let id = $("#sltClaim").val();
	let status = $("#sltStatus").val();

	if(id == '-1' || status == '-1') return;

    let start = performance.now();
	data = {"id":id,"fsk0109":status}

	$.post("http://localhost:8080/gj-kafka/producer", data,
	function (resp) {
		$.post("http://localhost:9191/update/claim", {
			id: resp.id,
			status: resp.fsk0109
		},function (str) {
			let end = performance.now();
			let str1 = "Updated Claim in:" + (end - start) + "ms";
			$("#msg").text(str1);
		});
	});
}

// function save() {
//     $.post("http://localhost:8080/save/claim", {
//         name: $("#name").val(),
//         status: $("#status").val()
//     }, function (str) {
//         $("#msg").empty().append(str);
//         getAllClaims();
//     });
// }


// function edit(id) {
//     $.post("http://localhost:8080/update/claim", {
//         ID: id,
//         name: $("#name").val(),
//         status: $("#status").val()
//     }, function (str) {
//         $("#msg").empty().append(str);
//         getAllClaims();
//     });
// }

$('document').ready(function (event) {
    getAllClaims();
    // getAllClaimsDummyData();
});