define({ root:
({
    tutorial_title: "JKE Banking Application",
    tutorial_heading: "JKE Banking Blueprint",
    tasks_heading: "Tasks",
    step_text: "<b>Step {0}</b> {1}",
    footer_text: "Step {0} of {1}",
    footer_warning: "The control required by this step is not visible. Go back one step.",
    tasks: [
            {
                name: "About this tutorial",
                desc: "In this tutorial, you will provision a cloud environment on OpenStack, AWS, and SoftLayer and deploy the JKE application components to that environment, primarily made up of Ubuntu Linux machines but we will also demonstrate a deployment on an environment made up entirely of Windows machines.",
                steps: [{}]
            },
            {
                name: "Clone Git Repository",
                desc: "You can utilize the built-in git tools to create or clone a git repository for your blueprints to keep them safe and versioned.",
                steps: [{query: "#repositories_img", text: "Click on the <b>Git</b> tab if it is not already open."},
                        {query: "#repoSection", text: "<b>Choose a Repository</b><br><br>Click the <b>Repository</b> drop-down to display the repository selection dialog box."},
                        {query: "#dropdownRepositoryActionsNode > button:nth-child(1)", text: "<b>Select Clone Repository</b><br><br>Click the <b>Clone Repository</b> button at the bottom of the dialog."},
                        {query: "#urlparameterCollector", text: "<b>Enter Git Repo URL</b><br><br>Enter the following git url into the text field:<br><br><code>https://github.com/stackinabox/jke-blueprint.git</code>"},
                        {query: "#orion-repository > span.tooltipContainer.tooltipShowing > div > span > button:nth-child(2)", text: "<b>Clone the Git Repository</b><br><br>Click the <b>Submit</b> button.<br><br>This will clone the git repo at the given url. If additional information like username or password is required you will be prompted for it."},
                        {query: "#repoSection", text: "<b>Choose a Repository</b><br><br>Click the <b>Repository</b> drop-down to display the repository selection dialog box again if it is not already showing."},
                        {query: "#repositoryNodeblueprintsClone", text: "<b>Select Current Repository</b><br><br>Click the <b>blueprints</b> repository.<br><br>If you have cloned multiple git repositories they will all appear here and you can choose which one will be the currently active repository. Note that the <b>active</b> repository only affects the Git tools. It has no effect on what files you see on the <b>Blueprints</b> tab."}
                        ]
            },
            {
                name: "Deploy to OpenStack",
                desc: "This image provides an embedded <a href=\"http://192.168.27.100\" target=\"_blank\">OpenStack</a> server. Let's use that OpenStack server as the <b>Cloud Provider</b> for our first deployment of the <b>simple-two-node-jke</b> blueprint.",
                steps: [{query: "#projects_img", text: "Click on the <b>Blueprints</b> tab if it is not already open."},
                        {query: "#dijit__TreeNode_1 > div.dijitTreeRow.dijitInline > img", text: "<b>Browse for blueprint</b><br><br>Click the toggle arrow next to the <b>blueprints</b> folder in the <b>Files</b> view to expand the folder and show the available blueprints under the <b>blueprints</b> folder."},
                        {query: "div[id^=\"simple-two-node-jke\"]", text: "<b>Open blueprint</b><br><br>Click the <b>simple-two-node-jke</b> blueprint from the <b>Files</b> view to open it in the designer."},
                        {query: "#containerNode > div.idxHeaderPrimaryThin.idxHeaderWidthLiquid > div > div > ul > li:nth-child(7) > a > span.idxHeaderUserText", text: "<b>Select a cloud provider</b><br><br>Click on the <b>Cloud Provider</b> drop-down menu and ensure you have selected the provider <b>demo@OpenStack Default Cloud Project</b> selected as the current cloud provider."},
                        {query: "[class=\"dijit dijitReset dijitInline dijitButton provisionButton\"]", text: "<b>Provision the blueprint</b><br><br>Click the blue <b>Provision</b> button in the toolbar.<br><br>This will bring up the <b>Provision</b> dialog where we will fill in some deployment specific parameters specific to this deployment on OpenStack."},
                        {query: "#dijit_form_ValidationTextBox_0", text: "<b>Name your environment</b><br><br>Enter a name for this environment into the <b>Environment Name</b> text field. This value will be used as the <b>stack</b> name in OpenStack as well as the <b>Environment</b> name for the <b>JKE</b> application in the UrbanCode Deploy server."},
                        {query: "#widget_dijit_form_FilteringSelect_0", text: "<b>Select Configuration</b><br><br>Click the <b>Configuration</b> drop-down and choose the <b>openstack-linux</b> configuration."},
                        {query: "[data-field-name=\"parameter/mysql-sg\"]", text: "<b>Select MySQL Security Group</b><br><br>Click the <b>Mysql-sg</b> drop-down and choose the <b>mysql-sg</b> configuration."},
                        {query: "[data-field-name=\"parameter/was-liberty-sg\"]", text: "<b>Select WAS Liberty Security Group</b><br><br>Click the <b>Was-liberty-sg</b> drop-down and choose the <b>was-liberty-sg</b> configuration."},
                        {query: "[data-field-name=\"parameter/private_network\"]", text: "<b>Select Private Network</b><br><br>Click the <b>Private Network</b> drop-down and choose the <b>private</b> configuration."},
                        {query: "[data-field-name=\"parameter/public_network\"]", text: "<b>Select Public Network</b><br><br>Click the <b>Public Network</b> drop-down and choose the <b>public</b> configuration."},
                        {query: "[data-field-name=\"parameter/server-img\"]", text: "<b>Select Server Image</b><br><br>Click the <b>Server-img</b> drop-down and choose the <b>ubuntu-trusty-cloudimg-amd64</b> configuration."},
                        {query: "div.provision-dialog > div.underField > span.dijit.dijitReset.dijitInline.idxButtonSpecial.dijitButton > span", text: "<b>Start the Provision</b><br><br>Click the <b>Provision</b> button to start the provisioning process on OpenStack."},
                        {query: "#environment_img", text: "<b>Monitor Provisioning</b><br><br>Click on the <b>Environments</b> tab to see the list of known environments. The environments view is where you can monitor existing and newly provisioned environments, get updates on work that is in process, and find much more information about your environments."}
                        ]
            },
            {
                name: "Deploy to AWS",
                desc: "This image provides an embedded script to setup the AWS Cloud Provider and associated Agent Relay to enable communication back from the deployment targets in AWS into this image. Let's use that script to go ahead and configure the AWS support and then we will deploy the JKE application onto an Environment provisioned on AWS.",
                steps: [{query: "#projects_img", text: "Click on the <b>Blueprints</b> tab if it is not already open."},
                        {query: "body", text: "<b>Run AWS Setup Script</b><br><br>Click the highlighted link to open a web based shell console for this image in your web browser.<br><br><a href=\"http://192.168.27.100:4200\" target=\"_blank\">Open Console</a><br><br>Login to the console using the username <code>vagrant</code> and the password <code>vagrant</code>.<br><br>Run the following command in the console <code>./aws-setup.sh</code><br><br><b>NOTE:</b> If you have already run the script and have not restarted this image since then or have not run the shutdown script <code>./aws-shutdown.sh</code> then you do not need to run this script again.<br><br>Follow the instructions in the console and input values appropriate for you.<br><br>When the script completes return here to continue with the deployment steps."},
                        {query: "#dijit__TreeNode_1 > div.dijitTreeRow.dijitInline > img", text: "<b>Browse for blueprint</b><br><br>Click the toggle arrow next to the <b>blueprints</b> folder in the <b>Files</b> view to expand the folder and show the available blueprints under the <b>blueprints</b> folder."},
                        {query: "div[id^=\"simple-two-node-jke\"]", text: "<b>Open blueprint</b><br><br>Click the <b>simple-two-node-jke</b> blueprint from the <b>Files</b> view to open it in the designer."},
                        {query: "#containerNode > div.idxHeaderPrimaryThin.idxHeaderWidthLiquid > div > div > ul > li:nth-child(7) > a > span.idxHeaderUserText", text: "<b>Select a cloud provider</b><br><br>Click on the <b>Cloud Provider</b> drop-down menu and ensure you have selected the provider <b>demo@Amazon EC2</b> selected as the current cloud provider."},
                        {query: "[class=\"dijit dijitReset dijitInline dijitButton provisionButton\"]", text: "<b>Provision the blueprint</b><br><br>Click the blue <b>Provision</b> button in the toolbar.<br><br>This will bring up the <b>Provision</b> dialog where we will fill in some deployment specific parameters specific to this deployment on OpenStack."},
                        {query: "#dijit_form_ValidationTextBox_0", text: "<b>Name your environment</b><br><br>Enter a name for this environment into the <b>Environment Name</b> text field. This value will be used as the <b>stack</b> name in OpenStack as well as the <b>Environment</b> name for the <b>JKE</b> application in the UrbanCode Deploy server."},
                        {query: "#widget_dijit_form_FilteringSelect_0", text: "<b>Select Configuration</b><br><br>Click the <b>Configuration</b> drop-down and choose the <b>amazon-linux</b> configuration."},
                        {query: "[data-field-name=\"parameter/mysql-sg\"]", text: "<b>Select MySQL Security Group</b><br><br>Click the <b>Mysql-sg</b> drop-down and choose the <b>mysql-sg</b> configuration."},
                        {query: "[data-field-name=\"parameter/was-liberty-sg\"]", text: "<b>Select WAS Liberty Security Group</b><br><br>Click the <b>Was-liberty-sg</b> drop-down and choose the <b>was-liberty-sg</b> configuration."},
                        {query: "[data-field-name=\"parameter/private_network\"]", text: "<b>Select Private Network</b><br><br>Click the <b>Private Network</b> drop-down and choose the one of the VPC's that is in the AWS Region you are deploying too."},
                        {query: "[data-field-name=\"parameter/public_network\"]", text: "<b>Select Public Network</b><br><br>AWS VPC's (networks) by default expose a public ip on every node stood up in the VPC so there is nothing you need to select here. Leave this field set to <b>TODO</b>"},
                        {query: "[data-field-name=\"parameter/server-img\"]", text: "<b>Select Server Image</b><br><br>If you have left the <b>Availability Zone</b> alone and are deploying to the <b>us-east-1</b> AWS Region then this AMI id will be a valid <b>Ubuntu 14.04 x86 64</b> image. If you have selected a different <b>Availability Zone</b> then you will need to locate an AMI id in your choosen <b>Availability Zone</b> that is a <b>Ubuntu 14.04 x86 64</b> image and paste the value in this field."},
                        {query: "[data-field-name=\"parameter/ucd_relay_url\"]", text: "<b>Set UCD Agent Relay URL</b><br><br>Since we will be deploying to machines running in the AWS cloud from a UCD server running on this image we will need to provide a way for the UCD Agents that we install on the machines in the cloud to connect back to the UCD server. The <code>aws-setup.sh</code> script you ran ealier in the console printed out the value of the UCD Agent Relay URL that you should paste into this field."},
                        {query: "div.provision-dialog > div.underField > span.dijit.dijitReset.dijitInline.idxButtonSpecial.dijitButton > span", text: "<b>Start the Provision</b><br><br>Click the <b>Provision</b> button to start the provisioning process on AWS."},
                        {query: "#environment_img", text: "<b>Monitor Provisioning</b><br><br>Click on the <b>Environments</b> tab to see the list of known environments. The environments view is where you can monitor existing and newly provisioned environments, get updates on work that is in process, and find much more information about your environments."}
                        ]
            },
            {
                name: "Deploy to AWS (on Windows)",
                desc: "This image provides an embedded script to setup the AWS Cloud Provider and associated Agent Relay to enable communication back from the deployment targets in AWS into this image. Let's use that script to go ahead and configure the AWS support and then we will deploy the JKE application onto an Environment provisioned on AWS.",
                steps: [{query: "#projects_img", text: "Click on the <b>Blueprints</b> tab if it is not already open."},
                        {query: "body", text: "<b>Run AWS Setup Script</b><br><br>Click the link below to open a web based shell console for this image in your web browser.<br><br><a href=\"http://192.168.27.100:4200\" target=\"_blank\">Open Console</a><br><br>Login to the console using the username <code>vagrant</code> and the password <code>vagrant</code>.<br><br>Run the following command in the console <code>./aws-setup.sh</code><br><br><b>NOTE:</b> If you have already run the script and have not restarted this image since then or have not run the shutdown script <code>./aws-shutdown.sh</code> then you do not need to run this script again.<br><br>Follow the instructions in the console and input values appropriate for you.<br><br>When the script completes return here to continue with the deployment steps."},
                        {query: "#dijit__TreeNode_1 > div.dijitTreeRow.dijitInline > img", text: "<b>Browse for blueprint</b><br><br>Click the toggle arrow next to the <b>blueprints</b> folder in the <b>Files</b> view to expand the folder and show the available blueprints under the <b>blueprints</b> folder."},
                        {query: "div[id^=\"simple-two-node-jke\"]", text: "<b>Open blueprint</b><br><br>Click the <b>simple-two-node-jke</b> blueprint from the <b>Files</b> view to open it in the designer."},
                        {query: "#containerNode > div.idxHeaderPrimaryThin.idxHeaderWidthLiquid > div > div > ul > li:nth-child(7) > a > span.idxHeaderUserText", text: "<b>Select a cloud provider</b><br><br>Click on the <b>Cloud Provider</b> drop-down menu and ensure you have selected the provider <b>demo@Amazon EC2</b> selected as the current cloud provider."},
                        {query: "[class=\"dijit dijitReset dijitInline dijitButton provisionButton\"]", text: "<b>Provision the blueprint</b><br><br>Click the blue <b>Provision</b> button in the toolbar.<br><br>This will bring up the <b>Provision</b> dialog where we will fill in some deployment specific parameters specific to this deployment on OpenStack."},
                        {query: "#dijit_form_ValidationTextBox_0", text: "<b>Name your environment</b><br><br>Enter a name for this environment into the <b>Environment Name</b> text field. This value will be used as the <b>stack</b> name in OpenStack as well as the <b>Environment</b> name for the <b>JKE</b> application in the UrbanCode Deploy server."},
                        {query: "#widget_dijit_form_FilteringSelect_0", text: "<b>Select Configuration</b><br><br>Click the <b>Configuration</b> drop-down and choose the <b>amazon-windows</b> configuration."},
                        {query: "[data-field-name=\"parameter/mysql-sg\"]", text: "<b>Select MySQL Security Group</b><br><br>Click the <b>Mysql-sg</b> drop-down and choose the <b>mysql-sg</b> configuration."},
                        {query: "[data-field-name=\"parameter/was-liberty-sg\"]", text: "<b>Select WAS Liberty Security Group</b><br><br>Click the <b>Was-liberty-sg</b> drop-down and choose the <b>was-liberty-sg</b> configuration."},
                        {query: "[data-field-name=\"parameter/private_network\"]", text: "<b>Select Private Network</b><br><br>Click the <b>Private Network</b> drop-down and choose the one of the VPC's that is in the AWS Region you are deploying too."},
                        {query: "[data-field-name=\"parameter/public_network\"]", text: "<b>Select Public Network</b><br><br>AWS VPC's (networks) by default expose a public ip on every node stood up in the VPC so there is nothing you need to select here. Leave this field set to <b>TODO</b>"},
                        {query: "[data-field-name=\"parameter/server-img\"]", text: "<b>Select Server Image</b><br><br>If you have left the <b>Availability Zone</b> alone and are deploying to the <b>us-east-1</b> AWS Region then this AMI id will be a valid <b>Windows Server 2k12R2</b> image. If you have selected a different <b>Availability Zone</b> then you will need to locate an AMI id in your choosen <b>Availability Zone</b> that is a <b>Windows Server 2k12R2</b> image and paste the value in this field."},
                        {query: "[data-field-name=\"parameter/ucd_relay_url\"]", text: "<b>Set UCD Agent Relay URL</b><br><br>Since we will be deploying to machines running in the AWS cloud from a UCD server running on this image we will need to provide a way for the UCD Agents that we install on the machines in the cloud to connect back to the UCD server. The <code>aws-setup.sh</code> script you ran ealier in the console printed out the value of the UCD Agent Relay URL that you should paste into this field."},
                        {query: "div.provision-dialog > div.underField > span.dijit.dijitReset.dijitInline.idxButtonSpecial.dijitButton > span", text: "<b>Start the Provision</b><br><br>Click the <b>Provision</b> button to start the provisioning process on AWS."},
                        {query: "#environment_img", text: "<b>Monitor Provisioning</b><br><br>Click on the <b>Environments</b> tab to see the list of known environments. The environments view is where you can monitor existing and newly provisioned environments, get updates on work that is in process, and find much more information about your environments."}
                        ]
            }
    ]
})
});