---
title: Team Setup
mode: minimal
---

<div class="app-body">
	<div class="app-setup">
		<div class="app-setup-content">
			<div class="app-setup-body">
			
				<div class="section-label">
					<h1>
						Invite your Team
						<small>Enter email addresses to invite teammates to your Sinter Project.</small>
					</h1>
				</div>
				<div class="section">
					<div class="section-header">
						<div class="header">
							<div class="header-title">
								<h4>Team</h4>
							</div>
						</div>
					</div>
					<div class="section-table">
						<table class="table table-justified table-large">
							<tbody>
								<tr>
									<td class="sm"><div class="avatar avatar-large"><img src="{{site.baseurl}}/ui/img/avatars/avatar1.jpg"></div></td>
									<td><h3>Tristan Handy</h3></td>
									<td><div class="meta">tristan@sinterdata.com</div></td>
									<td>
										<div class="dropdown">
											<div class="light" data-toggle="dropdown"><span class="caret"></span></div>
											<ul class="dropdown-menu dropdown-menu-right">
												<li><a href="#">Action 1</a></li>
												<li><a href="#">Action 2</a></li>
												<li><a href="#">Action 3</a></li>
											</ul>
										</div>
									</td>
								</tr>
								<tr>
									<td class="sm"><div class="avatar avatar-large"></div></td>
									<td><h3>Justin Example</h3></td>
									<td><div class="meta">justin@sinterdata.com</div></td>
									<td>
										<div class="dropdown">
											<div class="light" data-toggle="dropdown"><span class="caret"></span></div>
											<ul class="dropdown-menu dropdown-menu-right">
												<li><a href="#">Action 1</a></li>
												<li><a href="#">Action 2</a></li>
												<li><a href="#">Action 3</a></li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

			</div>
		</div>
	</div>
</div>

<div class="app-header">
	<div class="header">
		<div class="header-title">
			<h2>Account Setup</h2>
		</div>
		<div class="header-actions">
			<a class="btn btn-link meta" ng-click="showroute('setup')">Go Back</a>
			<a ng-if="(import_repo)" ng-click="showroute('setup-connection')" class="btn btn-success">Continue</a>
		</div>
	</div>
</div>
