
var resgrid;
(function (resgrid) {
    var security;
    (function (security) {
        var permissions;
        (function (permissions) {
            $(document).ready(function () {
                resgrid.common.analytics.track('Security Permissions');
                $('#AddUsers').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=0&perm=' + val,
                        type: 'GET'
                    }).done(function (results) {
                    });
                });
                $('#RemoveUsers').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=1&perm=' + val,
                        type: 'GET'
                    }).done(function (results) {
                    });
                });
                $('#CreateCall').change(function () {
                    var val = this.value;
                    if (val === "2") {
                        $('#callCreateNoRolesSpan').hide();
                        $('#callCreateRolesDiv').show();
                    }
                    else {
                        $('#callCreateNoRolesSpan').show();
                        $('#callCreateRolesDiv').hide();
                    }
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=2&perm=' + val,
                        type: 'GET'
                    }).done(function (results) {
                    });
                });
                $("#callCreateRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#callCreateRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=2&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=2',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#callCreateRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                if ($("#CreateCall").val() === "2") {
                    $('#callCreateNoRolesSpan').hide();
                    $('#callCreateRolesDiv').show();
                }
                else {
                    $('#callCreateNoRolesSpan').show();
                    $('#callCreateRolesDiv').hide();
                }
                $('#CreateTraining').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=3&perm=' + val,
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#CreateTraining").val() === "2") {
                        $('#trainingCreateNoRolesSpan').hide();
                        $('#trainingCreateRolesDiv').show();
                    }
                    else {
                        $('#trainingCreateNoRolesSpan').show();
                        $('#trainingCreateRolesDiv').hide();
                    }
                });
                if ($("#CreateTraining").val() === "2") {
                    $('#trainingCreateNoRolesSpan').hide();
                    $('#trainingCreateRolesDiv').show();
                }
                else {
                    $('#trainingCreateNoRolesSpan').show();
                    $('#trainingCreateRolesDiv').hide();
                }
                $("#trainingCreateRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#trainingCreateRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=3&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=3',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#trainingCreateRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $('#CreateDocument').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=4&perm=' + val,
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#CreateDocument").val() === "2") {
                        $('#documentCreateNoRolesSpan').hide();
                        $('#documentCreateRolesDiv').show();
                    }
                    else {
                        $('#documentCreateNoRolesSpan').show();
                        $('#documentCreateRolesDiv').hide();
                    }
                });
                if ($("#CreateDocument").val() === "2") {
                    $('#documentCreateNoRolesSpan').hide();
                    $('#documentCreateRolesDiv').show();
                }
                else {
                    $('#documentCreateNoRolesSpan').show();
                    $('#documentCreateRolesDiv').hide();
                }
                $("#documentCreateRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#documentCreateRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=4&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=4',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#documentCreateRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $('#CreateCalendarEntry').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=5&perm=' + val,
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#CreateCalendarEntry").val() === "2") {
                        $('#calendarEntriesCreateNoRolesSpan').hide();
                        $('#calendarEntriesCreateRolesDiv').show();
                    }
                    else {
                        $('#calendarEntriesCreateNoRolesSpan').show();
                        $('#calendarEntriesCreateRolesDiv').hide();
                    }
                });
                if ($("#CreateCalendarEntry").val() === "2") {
                    $('#calendarEntriesCreateNoRolesSpan').hide();
                    $('#calendarEntriesCreateRolesDiv').show();
                }
                else {
                    $('#calendarEntriesCreateNoRolesSpan').show();
                    $('#calendarEntriesCreateRolesDiv').hide();
                }
                $("#calendarEntiresCreateRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#calendarEntiresCreateRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=5&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=5',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#calendarEntiresCreateRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $('#CreateNote').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=6&perm=' + val,
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#CreateNote").val() === "2") {
                        $('#noteCreateNoRolesSpan').hide();
                        $('#noteCreateRolesDiv').show();
                    }
                    else {
                        $('#noteCreateNoRolesSpan').show();
                        $('#noteCreateRolesDiv').hide();
                    }
                });
                if ($("#CreateNote").val() === "2") {
                    $('#noteCreateNoRolesSpan').hide();
                    $('#noteCreateRolesDiv').show();
                }
                else {
                    $('#noteCreateNoRolesSpan').show();
                    $('#noteCreateRolesDiv').hide();
                }
                $("#noteCreateRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#noteCreateRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=6&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=6',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#noteCreateRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $('#CreateLog').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=7&perm=' + val,
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#CreateLog").val() === "2") {
                        $('#logCreateNoRolesSpan').hide();
                        $('#logCreateRolesDiv').show();
                    }
                    else {
                        $('#logCreateNoRolesSpan').show();
                        $('#logCreateRolesDiv').hide();
                    }
                });
                if ($("#CreateLog").val() === "2") {
                    $('#logCreateNoRolesSpan').hide();
                    $('#logCreateRolesDiv').show();
                }
                else {
                    $('#logCreateNoRolesSpan').show();
                    $('#logCreateRolesDiv').hide();
                }
                $("#logCreateRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#logCreateRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=7&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=7',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#logCreateRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $('#CreateShift').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=8&perm=' + val,
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#CreateShift").val() === "2") {
                        $('#shiftCreateNoRolesSpan').hide();
                        $('#shiftCreateRolesDiv').show();
                    }
                    else {
                        $('#shiftCreateNoRolesSpan').show();
                        $('#shiftCreateRolesDiv').hide();
                    }
                });
                if ($("#CreateShift").val() === "2") {
                    $('#shiftCreateNoRolesSpan').hide();
                    $('#shiftCreateRolesDiv').show();
                }
                else {
                    $('#shiftCreateNoRolesSpan').show();
                    $('#shiftCreateRolesDiv').hide();
                }
                $("#shiftCreateRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#shiftCreateRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=8&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=8',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#shiftCreateRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $('#ViewPersonalInfo').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=9&perm=' + val,
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#ViewPersonalInfo").val() === "2") {
                        $('#personalInfooRolesSpan').hide();
                        $('#personalInfoRolesDiv').show();
                    }
                    else {
                        $('#personalInfooRolesSpan').show();
                        $('#personalInfoRolesDiv').hide();
                    }
                });
                if ($("#ViewPersonalInfo").val() === "2") {
                    $('#personalInfooRolesSpan').hide();
                    $('#personalInfoRolesDiv').show();
                }
                else {
                    $('#personalInfooRolesSpan').show();
                    $('#personalInfoRolesDiv').hide();
                }
                $("#personalInfoRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#personalInfoRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=9&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=9',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#personalInfoRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $('#AdjustInventory').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=10&perm=' + val,
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#AdjustInventory").val() === "2") {
                        $('#adjustInventoryRolesSpan').hide();
                        $('#adjustInventoryRolesDiv').show();
                    }
                    else {
                        $('#adjustInventoryRolesSpan').show();
                        $('#adjustInventoryRolesDiv').hide();
                    }
                });
                if ($("#AdjustInventory").val() === "2") {
                    $('#adjustInventoryRolesSpan').hide();
                    $('#adjustInventoryRolesDiv').show();
                }
                else {
                    $('#adjustInventoryRolesSpan').show();
                    $('#adjustInventoryRolesDiv').hide();
                }
                $("#adjustInventoryRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#adjustInventoryRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=10&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=10',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#adjustInventoryRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $('#ViewPersonnelLocation').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=11&perm=' + val + '&lockToGroup=' + $('#LockViewPersonneLocationToGroup').is(':checked'),
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#ViewPersonnelLocation").val() === "2") {
                        $('#viewPersonnelLocationRolesSpan').hide();
                        $('#viewPersonnelLocationRolesDiv').show();
                    }
                    else {
                        $('#viewPersonnelLocationRolesSpan').show();
                        $('#viewPersonnelLocationRolesDiv').hide();
                    }
                });
                if ($("#ViewPersonnelLocation").val() === "2") {
                    $('#viewPersonnelLocationRolesSpan').hide();
                    $('#viewPersonnelLocationRolesDiv').show();
                }
                else {
                    $('#viewPersonnelLocationRolesSpan').show();
                    $('#viewPersonnelLocationRolesDiv').hide();
                }
                $("#viewPersonnelLocationRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#viewPersonnelLocationRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=11&data=' + encodeURIComponent(multiSelect.value()) + '&lockToGroup=' + $('#LockViewPersonneLocationToGroup').is(':checked'),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=11',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#viewPersonnelLocationRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $('#LockViewPersonneLocationToGroup').change(function () {
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=11&perm=' + $('#ViewPersonnelLocation').val() + '&lockToGroup=' + $('#LockViewPersonneLocationToGroup').is(':checked'),
                        type: 'GET'
                    }).done(function (results) {
                    });
                });

                // View unit location
                $('#ViewUnitLocation').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=12&perm=' + val + '&lockToGroup=' + $('#LockViewPersonneLocationToGroup').is(':checked'),
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#ViewUnitLocation").val() === "2") {
                        $('#viewUnitLocationsRolesSpan').hide();
                        $('#viewUnitLocationsRolesDiv').show();
                    }
                    else {
                        $('#viewUnitLocationsRolesSpan').show();
                        $('#viewUnitLocationsRolesDiv').hide();
                    }
                });
                if ($("#ViewUnitLocation").val() === "2") {
                    $('#viewUnitLocationsRolesSpan').hide();
                    $('#viewUnitLocationsRolesDiv').show();
                }
                else {
                    $('#viewUnitLocationsRolesSpan').show();
                    $('#viewUnitLocationsRolesDiv').hide();
                }
                $("#viewUnitLocationsRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#viewUnitLocationsRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=12&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=12',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#viewUnitLocationsRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $('#LockViewUnitLocationToGroup').change(function () {
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=12&perm=' + $('#ViewUnitLocation').val() + '&lockToGroup=' + $('#LockViewUnitLocationToGroup').is(':checked'),
                        type: 'GET'
                    }).done(function (results) {
                    });
                });

                // Create message
                $('#CreateMessage').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=13&perm=' + val,
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#CreateMessage").val() === "2") {
                        $('#createMessagesRolesSpan').hide();
                        $('#createMessagesRolesDiv').show();
                    }
                    else {
                        $('#adjustInventoryRolesSpan').show();
                        $('#createMessagesRolesDiv').hide();
                    }
                });
                if ($("#CreateMessage").val() === "2") {
                    $('#createMessagesRolesSpan').hide();
                    $('#createMessagesRolesDiv').show();
                }
                else {
                    $('#createMessagesRolesSpan').show();
                    $('#createMessagesRolesDiv').hide();
                }
                $('#ViewGroupsUsers').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=14&perm=' + val,
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#ViewGroupsUsers").val() === "2") {
                        $('#viewUsersRolesSpan').hide();
                        $('#viewUsersRolesDiv').show();
                    }
                    else {
                        $('#viewUsersRolesSpan').show();
                        $('#viewUsersRolesDiv').hide();
                    }
                });
                if ($("#ViewGroupsUsers").val() === "2") {
                    $('#viewUsersRolesSpan').hide();
                    $('#viewUsersRolesDiv').show();
                }
                else {
                    $('#viewUsersRolesSpan').show();
                    $('#viewUsersRolesDiv').hide();
                }
                $('#LockViewGroupsUsersToGroup').change(function () {
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=14&perm=' + $('#LockViewGroupsUsersToGroup').val() + '&lockToGroup=' + $('#LockViewGroupsUsersToGroup').is(':checked'),
                        type: 'GET'
                    }).done(function (results) {
                    });
                });
                // Create message
                $("#createMessagesRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#createMessagesRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=13&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=13',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#createMessagesRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=14',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#viewUsersRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });

                // Delete Call
                ////////////////////////////////////////////////////////
                $('#DeleteCall').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=15&perm=' + val + '&lockToGroup=' + $('#LockDeleteCallToGroup').is(':checked'),
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#DeleteCall").val() === "2") {
                        $('#deleteCallsRolesSpan').hide();
                        $('#deleteCallsRolesDiv').show();
                    }
                    else {
                        $('#deleteCallsRolesSpan').show();
                        $('#deleteCallsRolesDiv').hide();
                    }
                });
                if ($("#DeleteCall").val() === "2") {
                    $('#deleteCallsRolesSpan').hide();
                    $('#deleteCallsRolesDiv').show();
                }
                else {
                    $('#deleteCallsRolesSpan').show();
                    $('#deleteCallsRolesDiv').hide();
                }
                $("#deleteCallsRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#deleteCallsRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=15&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=15',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#deleteCallsRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $('#LockDeleteCallToGroup').change(function () {
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=15&perm=' + $('#DeleteCall').val() + '&lockToGroup=' + $('#LockDeleteCallToGroup').is(':checked'),
                        type: 'GET'
                    }).done(function (results) {
                    });
                });
                ////////////////////////////////////////////////////////

                // Close Call
                ////////////////////////////////////////////////////////
                $('#CloseCall').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=16&perm=' + val + '&lockToGroup=' + $('#LockCloseCallToGroup').is(':checked'),
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#CloseCall").val() === "2") {
                        $('#closeCallsRolesSpan').hide();
                        $('#closeCallsRolesDiv').show();
                    }
                    else {
                        $('#closeCallsRolesSpan').show();
                        $('#closeCallsRolesDiv').hide();
                    }
                });
                if ($("#CloseCall").val() === "2") {
                    $('#closeCallsRolesSpan').hide();
                    $('#closeCallsRolesDiv').show();
                }
                else {
                    $('#closeCallsRolesSpan').show();
                    $('#closeCallsRolesDiv').hide();
                }
                $("#closeCallsRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#closeCallsRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=16&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=16',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#closeCallsRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $('#LockCloseCallToGroup').change(function () {
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=16&perm=' + $('#CloseCall').val() + '&lockToGroup=' + $('#LockCloseCallToGroup').is(':checked'),
                        type: 'GET'
                    }).done(function (results) {
                    });
                });
                ////////////////////////////////////////////////////////

                // Add Call Data
                ////////////////////////////////////////////////////////
                $('#AddCallData').change(function () {
                    var val = this.value;
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=17&perm=' + val + '&lockToGroup=' + $('#LockAddCallDataToGroup').is(':checked'),
                        type: 'GET'
                    }).done(function (results) {
                    });
                    if ($("#AddCallData").val() === "2") {
                        $('#addCallDataRolesSpan').hide();
                        $('#addCallDataRolesDiv').show();
                    }
                    else {
                        $('#addCallDataRolesSpan').show();
                        $('#addCallDataRolesDiv').hide();
                    }
                });
                if ($("#AddCallData").val() === "2") {
                    $('#addCallDataRolesSpan').hide();
                    $('#addCallDataRolesDiv').show();
                }
                else {
                    $('#addCallDataRolesSpan').show();
                    $('#addCallDataRolesDiv').hide();
                }
                $("#addCallDataRoles").kendoMultiSelect({
                    placeholder: "Select roles...",
                    dataTextField: "Name",
                    dataValueField: "RoleId",
                    change: function () {
                        var multiSelect = $("#addCallDataRoles").data("kendoMultiSelect");
                        $.ajax({
                            url: resgrid.absoluteBaseUrl + '/User/Security/SetPermissionData?type=17&data=' + encodeURIComponent(multiSelect.value()),
                            type: 'GET'
                        }).done(function (results) {
                        });
                    },
                    autoBind: false,
                    dataSource: {
                        transport: {
                            read: resgrid.absoluteBaseUrl + '/User/Personnel/GetRoles'
                        }
                    }
                });
                $.ajax({
                    url: resgrid.absoluteBaseUrl + '/User/Security/GetRolesForPermission?type=17',
                    contentType: 'application/json',
                    type: 'GET'
                }).done(function (data) {
                    if (data) {
                        var multiSelect = $("#addCallDataRoles").data("kendoMultiSelect");
                        multiSelect.value(data.split(","));
                    }
                });
                $('#LockAddCallDataToGroup').change(function () {
                    $.ajax({
                        url: resgrid.absoluteBaseUrl + '/User/Security/SetPermission?type=17&perm=' + $('#AddCallData').val() + '&lockToGroup=' + $('#LockAddCallDataToGroup').is(':checked'),
                        type: 'GET'
                    }).done(function (results) {
                    });
                });
                ////////////////////////////////////////////////////////
            });
        })(permissions = security.permissions || (security.permissions = {}));
    })(security = resgrid.security || (resgrid.security = {}));
})(resgrid || (resgrid = {}));
