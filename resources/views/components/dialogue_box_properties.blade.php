<div class="new-user-dialogue-box-content" style="display: none;">
    <div class="modal-body height-500 vertical-scroll scroll-example">
        <div class="nav-vertical">
            <ul class="nav nav-tabs nav-left nav-border-left">
                <li class="nav-item">
                    <a class="nav-link active" style="width: 150px;" id="baseVerticalLeft1-tab1" data-toggle="tab" aria-controls="tabVerticalLeft11" href="#tabVerticalLeft11" aria-expanded="true"> New Fleet Details <span class="employee_process_result2"></span></a>
                </li>

                <!-- <li class="nav-item">
                <a class="nav-link" style="width: 150px;" id="baseVerticalLeft1-tab3" data-toggle="tab" aria-controls="tabVerticalLeft12" href="#tabVerticalLeft12" aria-expanded="false"> Business Terms  <span class="customer_process_result2"></span></a>
            </li> -->


            </ul>
            <div class="tab-content px-1">
                <div role="tabpanel" class="tab-pane active" id="tabVerticalLeft11" aria-expanded="true" aria-labelledby="baseVerticalLeft1-tab1">

                    <span class="employee_process_result"></span>

                    <form class="get_content form n_employee_fm" action="/cloudoffice_new/office/qh/logistics-add-new-fleet-form-process/" progress_name="employee_process_result2" result_name="employee_process_result" progress_image="<span id=&quot;basic-addon6&quot;><i class=&quot;la la-rotate-right icon-spin&quot;></i></span>" method="POST">
                        <label for="pm_customer_1">Owner </label>
                        <div class="form-group position-relative has-icon-left">
                            <input type="hidden1" class="pm_customer" value="397" name="owner">

                            <input type="text" id="pm_customer_1" required="" value="Topskynet Technologies Ltd " property_b="customer" property_c="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" autocomplete="off" name="pm_customer_1" class="form-control list_selector pm_customer_1 click" url="/cloudoffice_new/office/qh/project-customer-search/" progress_name="customer-search-progress" result="project_user_search" action="active" act-on="customers_list" progress_image="<span id=&quot;basic-addon6&quot;><i class=&quot;la la-rotate-right icon-spin&quot;></i></span>" placeholder="Search for Customer" aria-describedby="basic-addon6">
                            <div class="form-control-position customer-search-progress">
                                <i class="la la-search font-medium-5 line-height-1 text-muted icon-align"></i>
                            </div>
                            <div class="dropdown-menu dropdown-demo project_user_search" style="width: 100%; ">
                                <div class="branch_list customers_list">

                                </div>
                            </div>
                        </div>

                        <label for="pm_name_1">Assign to:</label>
                        <div class="form-group position-relative has-icon-left">
                            <input type="hidden" class="pm_name_1" value="" name="pilot">

                            <input type="text" id="pm_name_1" required="" property_b="pm" property_c="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" autocomplete="off" name="pm_name_1" class="form-control list_selector search_br_state del_to2 click" action="active" act-on="employee_list" url="/cloudoffice_new/office/qh/project-user-search/" progress_name="invoice-pro-search-progress" result="project_employee_search" progress_image="<span id=&quot;basic-addon6&quot;><i class=&quot;la la-rotate-right icon-spin&quot;></i></span>" placeholder="Search Employee" aria-describedby="basic-addon6">
                            <div class="form-control-position invoice-pro-search-progress">
                                <i class="la la-search font-medium-5 line-height-1 text-muted icon-align"></i>
                            </div>
                            <div class="dropdown-menu dropdown-demo project_employee_search" style="width: 100%;">
                                <div class="employee_list ">
                                     
                                    <a class="dropdown-item get-option" action="toggle" act-on="employee_list" option1=" " option1_to="del_to2" option3="481" option3_to="pm_name_1" url="#" activity_name=" " activity_name_set="content_title_2" property_a="" property_b="" property_c="" property_d="" property_e="" progress_name="biz_type_list2" progress_image="" data-target="#rollIn" result="biz_type_list"> </a>
                                   

                                </div>
                            </div>
                        </div>

                        <label for="label-pilot-title">Title: </label>

                        <div class="form-group position-relative has-icon-left">
                            <input type="text" name="pilot_title" class="form-control" id="label-pilot-title" placeholder="Job Title">
                            <div class="form-control-position">
                                <i class="la la-list font-medium-5 line-height-1 text-muted icon-align"></i>
                            </div>
                        </div>


                        <label for="br_state">Type: <span class="item_type_list"></span> </label>
                        <div class="form-group position-relative has-icon-left">
                            <input type="text" id="br_state" required="" property_b="" property_c="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" autocomplete="off" name="br_s_state" class="form-control list_selector search_type " url="/cloudoffice_new/office/qh/logistics-item-type-search/" progress_name="item_type_list" result="state_search_list" progress_image="<span id=&quot;basic-addon6&quot;><i class=&quot;la la-rotate-right icon-spin&quot;></i></span>" placeholder="Search for fleet type" aria-describedby="basic-addon6">
                            <input type="hidden" class="cont_id_state" name="fleet_type">
                            <input type="hidden" value="fleet" name="comp_type">
                            <div class="form-control-position">
                                <i class="la la-list font-medium-5 line-height-1 text-muted icon-align"></i>
                            </div>
                            <div class="dropdown-menu dropdown-demo " style="width: 100%;">
                                <div class="state_search_list">
                                    <a href="#" class="dropdown-item get-option modal_activity" option1="Truck" option1_to="search_type" option3="16" option3_to="cont_id_state" url="/cloudoffice_new/office/qh/branch-option-click/" activity_name=" " activity_name_set="content_title_2" property_a="16" property_b="" property_c="" property_d="" property_e="jstate" progress_name="biz_type_list2" progress_image="" data-target="#rollIn" result="biz_type_list"> Truck </a><a href="#" class="dropdown-item get-option modal_activity" option1="Car" option1_to="search_type" option3="15" option3_to="cont_id_state" url="/cloudoffice_new/office/qh/branch-option-click/" activity_name=" " activity_name_set="content_title_2" property_a="15" property_b="" property_c="" property_d="" property_e="jstate" progress_name="biz_type_list2" progress_image="" data-target="#rollIn" result="biz_type_list"> Car </a><a href="#" class="dropdown-item get-option modal_activity" option1="Tricycle" option1_to="search_type" option3="14" option3_to="cont_id_state" url="/cloudoffice_new/office/qh/branch-option-click/" activity_name=" " activity_name_set="content_title_2" property_a="14" property_b="" property_c="" property_d="" property_e="jstate" progress_name="biz_type_list2" progress_image="" data-target="#rollIn" result="biz_type_list"> Tricycle </a><a href="#" class="dropdown-item get-option modal_activity" option1="Vessel" option1_to="search_type" option3="13" option3_to="cont_id_state" url="/cloudoffice_new/office/qh/branch-option-click/" activity_name=" " activity_name_set="content_title_2" property_a="13" property_b="" property_c="" property_d="" property_e="jstate" progress_name="biz_type_list2" progress_image="" data-target="#rollIn" result="biz_type_list"> Vessel </a>
                                </div>
                            </div>
                        </div>

                        <input type="hidden" name="label[]" value="36">
                        <label for="label-36">CHASIS NO: </label>

                        <div class="form-group position-relative has-icon-left">
                            <input type="text" name="label-cont-1" class="form-control" id="label-36" placeholder="CHASIS NO">
                            <div class="form-control-position">
                                <i class="la la-car font-medium-5 line-height-1 text-muted icon-align"></i>
                            </div>
                        </div>


                        <input type="hidden" name="label[]" value="35">
                        <label for="label-35">COLOR: </label>

                        <div class="form-group position-relative has-icon-left">
                            <input type="text" name="label-cont-2" class="form-control" id="label-35" placeholder="COLOR">
                            <div class="form-control-position">
                                <i class="la la-car font-medium-5 line-height-1 text-muted icon-align"></i>
                            </div>
                        </div>


                        <input type="hidden" name="label[]" value="34">
                        <label for="label-34">ENGINE NO: </label>

                        <div class="form-group position-relative has-icon-left">
                            <input type="text" name="label-cont-3" class="form-control" id="label-34" placeholder="ENGINE NO">
                            <div class="form-control-position">
                                <i class="la la-car font-medium-5 line-height-1 text-muted icon-align"></i>
                            </div>
                        </div>


                        <input type="hidden" name="label[]" value="33">
                        <label for="label-33">REGISTRATION NO: </label>

                        <div class="form-group position-relative has-icon-left">
                            <input type="text" name="label-cont-4" class="form-control" id="label-33" placeholder="REGISTRATION NO">
                            <div class="form-control-position">
                                <i class="la la-car font-medium-5 line-height-1 text-muted icon-align"></i>
                            </div>
                        </div>


                        <input type="hidden" name="label[]" value="32">
                        <label for="label-32">MODEL: </label>

                        <div class="form-group position-relative has-icon-left">
                            <input type="text" name="label-cont-5" class="form-control" id="label-32" placeholder="MODEL">
                            <div class="form-control-position">
                                <i class="la la-car font-medium-5 line-height-1 text-muted icon-align"></i>
                            </div>
                        </div>


                        <input type="hidden" name="label[]" value="31">
                        <label for="label-31">Make: </label>

                        <div class="form-group position-relative has-icon-left">
                            <input type="text" name="label-cont-6" class="form-control" id="label-31" placeholder="Make">
                            <div class="form-control-position">
                                <i class="la la-car font-medium-5 line-height-1 text-muted icon-align"></i>
                            </div>
                        </div>


                        <input type="hidden" name="label[]" value="30">
                        <label for="label-30">Condition: </label>

                        <div class="form-group position-relative has-icon-left">
                            <input type="text" name="label-cont-7" class="form-control" id="label-30" placeholder="Condition">
                            <div class="form-control-position">
                                <i class="la la-car font-medium-5 line-height-1 text-muted icon-align"></i>
                            </div>
                        </div>


                        <label for="d_fleet_name">Name: <span class="item_name_search_progress"></span> </label>
                        <div class="form-group position-relative has-icon-left">
                            <input type="text" id="d_fleet_name" required="" property_b="fleet" property_c="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" autocomplete="off" name="comp_name" class="form-control list_selector search_item_name " url="/cloudoffice_new/office/qh/logistics-item-list-search/" progress_name="item_name_search_progress" result="log_search_items_list" progress_image="<span id=&quot;basic-addon6&quot;><i class=&quot;la la-rotate-right icon-spin&quot;></i></span>" placeholder="Type Name" aria-describedby="basic-addon6">
                            <div class="form-control-position">
                                <i class="la la-list font-medium-5 line-height-1 text-muted icon-align"></i>
                            </div>
                            <div class="dropdown-menu dropdown-demo " style="width: 100%;">
                                <div class="log_search_items_list">
                                    <a href="#" class="dropdown-item get-option modal_activity" option1="Toyota Camry" option1_to="search_item_name" option3="30" option3_to="cont_id_name" url="/cloudoffice_new/office/qh/logistics-item-add-to-list-process/" activity_name=" " activity_name_set="content_title_2" property_a="30" property_b="fleet" property_c="" property_d="" property_e="jstate" progress_name="item_name_search_progress" progress_image="" data-target="#rollIn" result="item_name_search_progress"> Toyota Camry </a><a href="#" class="dropdown-item get-option modal_activity" option1="Toyota Truck 1 Tune" option1_to="search_item_name" option3="29" option3_to="cont_id_name" url="/cloudoffice_new/office/qh/logistics-item-add-to-list-process/" activity_name=" " activity_name_set="content_title_2" property_a="29" property_b="fleet" property_c="" property_d="" property_e="jstate" progress_name="item_name_search_progress" progress_image="" data-target="#rollIn" result="item_name_search_progress"> Toyota Truck 1 Tune </a><a href="#" class="dropdown-item get-option modal_activity" option1="Toyota Truck 1 Tune" option1_to="search_item_name" option3="28" option3_to="cont_id_name" url="/cloudoffice_new/office/qh/logistics-item-add-to-list-process/" activity_name=" " activity_name_set="content_title_2" property_a="28" property_b="fleet" property_c="" property_d="" property_e="jstate" progress_name="item_name_search_progress" progress_image="" data-target="#rollIn" result="item_name_search_progress"> Toyota Truck 1 Tune </a><a href="#" class="dropdown-item get-option modal_activity" option1="Toyota Truck 1 Tune" option1_to="search_item_name" option3="27" option3_to="cont_id_name" url="/cloudoffice_new/office/qh/logistics-item-add-to-list-process/" activity_name=" " activity_name_set="content_title_2" property_a="27" property_b="fleet" property_c="" property_d="" property_e="jstate" progress_name="item_name_search_progress" progress_image="" data-target="#rollIn" result="item_name_search_progress"> Toyota Truck 1 Tune </a><a href="#" class="dropdown-item get-option modal_activity" option1="Toyota Truck 1 Tune" option1_to="search_item_name" option3="26" option3_to="cont_id_name" url="/cloudoffice_new/office/qh/logistics-item-add-to-list-process/" activity_name=" " activity_name_set="content_title_2" property_a="26" property_b="fleet" property_c="" property_d="" property_e="jstate" progress_name="item_name_search_progress" progress_image="" data-target="#rollIn" result="item_name_search_progress"> Toyota Truck 1 Tune </a><a href="#" class="dropdown-item get-option modal_activity" option1="TATA Truck 50 Tone 2" option1_to="search_item_name" option3="25" option3_to="cont_id_name" url="/cloudoffice_new/office/qh/logistics-item-add-to-list-process/" activity_name=" " activity_name_set="content_title_2" property_a="25" property_b="fleet" property_c="" property_d="" property_e="jstate" progress_name="item_name_search_progress" progress_image="" data-target="#rollIn" result="item_name_search_progress"> TATA Truck 50 Tone 2 </a><a href="#" class="dropdown-item get-option modal_activity" option1="TATA Truck 50 Tone " option1_to="search_item_name" option3="24" option3_to="cont_id_name" url="/cloudoffice_new/office/qh/logistics-item-add-to-list-process/" activity_name=" " activity_name_set="content_title_2" property_a="24" property_b="fleet" property_c="" property_d="" property_e="jstate" progress_name="item_name_search_progress" progress_image="" data-target="#rollIn" result="item_name_search_progress"> TATA Truck 50 Tone </a><a href="#" class="dropdown-item get-option modal_activity" option1="Toyota Camry XLE" option1_to="search_item_name" option3="23" option3_to="cont_id_name" url="/cloudoffice_new/office/qh/logistics-item-add-to-list-process/" activity_name=" " activity_name_set="content_title_2" property_a="23" property_b="fleet" property_c="" property_d="" property_e="jstate" progress_name="item_name_search_progress" progress_image="" data-target="#rollIn" result="item_name_search_progress"> Toyota Camry XLE </a><a href="#" class="dropdown-item get-option modal_activity" option1="Toyota Truck 1 Tune" option1_to="search_item_name" option3="22" option3_to="cont_id_name" url="/cloudoffice_new/office/qh/logistics-item-add-to-list-process/" activity_name=" " activity_name_set="content_title_2" property_a="22" property_b="fleet" property_c="" property_d="" property_e="jstate" progress_name="item_name_search_progress" progress_image="" data-target="#rollIn" result="item_name_search_progress"> Toyota Truck 1 Tune </a><a href="#" class="dropdown-item get-option modal_activity" option1="Keke" option1_to="search_item_name" option3="21" option3_to="cont_id_name" url="/cloudoffice_new/office/qh/logistics-item-add-to-list-process/" activity_name=" " activity_name_set="content_title_2" property_a="21" property_b="fleet" property_c="" property_d="" property_e="jstate" progress_name="item_name_search_progress" progress_image="" data-target="#rollIn" result="item_name_search_progress"> Keke </a>
                                </div>
                            </div>
                        </div>

                        <label for="comp_desc">Description: </label>
                        <div class="form-group position-relative has-icon-left">
                            <textarea name="comp_desc" id="comp_desc" cols="30" class="form-control comp_desc" rows="10"></textarea>
                            <!-- <div class="form-control-position">
                <i class="la la-file-text font-large-1 line-height-1 text-muted icon-align"></i>
            </div> -->
                        </div>


                        <div class="form-actions right">
                            <button type="submit" class="btn btn-primary">
                                <i class="la la-check-square-o"></i> Save
                            </button>
                        </div>
                    </form>
                </div>
                <div class="tab-pane" id="tabVerticalLeft12" aria-labelledby="baseVerticalLeft1-tab2">
                    <p class="customer_process_result"> </p>
                    <form class="get_content form n_employee_fm" action="/cloudoffice_new/office/qh/crm-customer-terms-form-process/" progress_name="customer_process_result2" result_name="customer_process_result" progress_image="<span id=&quot;basic-addon6&quot;><i class=&quot;la la-rotate-right icon-spin&quot;></i></span>" method="POST">
                        <input type="hidden" value="" name="user_id">
                        <div class="form-group">
                            <label for="term_title">Title</label>
                            <div class="position-relative has-icon-left">
                                <input type="text" class="form-control" value="" id="term_title" name="term_title" placeholder="Title" required="" data-validation-required-message="Title">
                                <input type="hidden" name="acc_type" value="1">
                                <div class="form-control-position">
                                    <i class="ft-user"></i>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <textarea cols="80" id="editor1" name="term_desc" style="height: 500px;" rows="20" placeholder="Type the terms" data-sample-short=""></textarea>
                        </div>
                        <div class="form-actions right">
                            <button type="submit" class="btn btn-primary">
                                <i class="la la-check-square-o"></i> Save
                            </button>
                        </div>
                    </form>
                </div>
                <div class="tab-pane edit_terms_load_here" id="tabVerticalLeft13" aria-labelledby="baseVerticalLeft1-tab3">
                    <p>Loading terms... please wait</p>
                </div>
                <div class="tab-pane" id="tabVerticalLeft14" aria-labelledby="baseVerticalLeft1-tab3">
                    <p>This feature is not enabled by admin.</p>
                </div>
            </div>
        </div>
    </div>
</div>