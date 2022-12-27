import React from 'react';
import {
	CalloutCard, Page, Badge, Card, Layout, Text, TextField, Stack, Button, Divider, AlphaStack, ButtonGroup,
	Thumbnail, PageActions, MediaCard
} from '@shopify/polaris';
import { useState, useCallback } from 'react';
import cardImg from '../Assets/group_198.png';
import previewImg from '../Assets/preview_img.png';
import thumbnail_1 from '../Assets/thumbnail_1.png';
import thumbnail_2 from '../Assets/thumbnail_2.png';
import thumbnail_3 from '../Assets/thumbnail_3.png';
import popupImg from '../Assets/eclipse_10.png';

export default function Home() {
	const [textFieldValue, setTextFieldValue] = useState(
		'From {country}, Just bought this',
	);

	const handleTextFieldChange = useCallback(
		(value) => setTextFieldValue(value),
		[],
	);

	const [popupTimeFieldValue, setPopupTimeFieldValue] = useState('15');

	const handlepopupTimeFieldChange = useCallback(
		(value) => setPopupTimeFieldValue(value),
		[],
	);

	const [colorValues, setColorValues] = useState({
		primaryPopupColor: '#ffffff',
		secondaryPopupColor: '#000000',
		primaryPopupText: '#000000',
		secondaryPopupText: '#ffffff',
	});
	const handleDesignColors = (e) => {
		setColorValues({ ...colorValues, [e.target.name]: e.target.value })
	}
	return (
		<div>
			<Page
			>
				<CalloutCard
					title="Customize the style of your checkout"
					illustration={cardImg}
					primaryAction={{
						content: 'Deactivate popups',
						url: 'https://www.shopify.com',
					}}
				>
					<p>Upload your store’s logo, change colors and fonts, and more.</p>
				</CalloutCard>

				<Card sectioned>
					<div className='two-column-layout'>
						<Layout>
							<Layout.Section oneHalf>
								<TextField
									label="Popup message"
									type="text"
									value={textFieldValue}
									onChange={handleTextFieldChange}
									helpText="Edit the message you would like displayed on your popups."
									autoComplete="off"
								/>
								<br />
								<TextField
									label="How long your popups will be displayed"
									type="text"
									value={popupTimeFieldValue}
									onChange={handlepopupTimeFieldChange}
									suffix="seconds"
									autoComplete="off"
								/>
								<br />
								<br />
								<Stack>
									<Stack.Item fill>
										<Text variant="bodyMd" as="p">
											Customer name is showing
										</Text>
									</Stack.Item>
									<Stack.Item>
										<Button primary>Hide name</Button>
									</Stack.Item>
								</Stack>
								<br />
								<br />
								<AlphaStack gap="5" fullWidth>
									<Divider borderStyle="base" />
								</AlphaStack>
								<br />
								<br />
								<Text variant="bodyMd" as="p">
									Popup position
								</Text>
								<br />
								<Text variant="bodyMd" as="p" color="subdued">
									Where on your customer's screen you would like your popups to be displayed.
								</Text>
								<br />
								<ButtonGroup segmented>
									<Button outline>Top Left</Button>
									<Button primary>Top Right</Button>
									<Button outline>Bottom Left</Button>
									<Button outline>Bottom Right</Button>
								</ButtonGroup>
								<br />
								<br />
								<AlphaStack gap="5" fullWidth>
									<Divider borderStyle="base" />
								</AlphaStack>
								<br />
								<br />
								<Text variant="bodyMd" as="p">
									Appearance
								</Text>
								<br />
								<br />
								<div className="apprearance-thumbnails">
									<Thumbnail
										source={thumbnail_1}
										size="large"
										alt=""
									/>
									<Thumbnail
										source={thumbnail_2}
										size="large"
										alt=""
									/>
									<Thumbnail
										source={thumbnail_3}
										size="large"
										alt=""
									/>
								</div>

								<div className='Color-Inputs'>

									<Stack>
										<label
											className={`${colorValues?.primaryPopupColor === '#ffffff' ? 'Color-Circle-Border' : ''} Color-Circle`}
											style={{ backgroundColor: colorValues?.primaryPopupColor }}>
											<input type="color"
												value={colorValues?.primaryPopupColor}
												name='primaryPopupColor'
												onChange={handleDesignColors}
											/>
										</label>
										<span className='Color-Property'>
											<Stack vertical>

												<div className="color-field-1">
													<div className="Polaris-Labelled__LabelWrapper">
														<div className="Polaris-Label">
															<label htmlFor="primaryColor" className="Polaris-Label__Text">
																<span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">Primary Popup Color</span>
															</label>
														</div>
													</div>
													<div className="Polaris-Connected">
														<div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
															<div className="Polaris-TextField Polaris-TextField--hasValue">
																<input id="primaryColor"
																	autoComplete="off"
																	className="Polaris-TextField__Input"
																	type="text"
																	aria-labelledby="PolarisTextField1Label"
																	aria-invalid="false"
																	value={colorValues?.primaryPopupColor}
																	name="primaryPopupColor"
																	onChange={handleDesignColors}
																/>
																<div className="Polaris-TextField__Backdrop">
																</div>
															</div>
														</div>
													</div>
												</div>
											</Stack>
										</span>
									</Stack>

									<Stack>
										<label
											className={`${colorValues?.secondaryPopupColor === '#FFFFFF' ? 'Color-Circle-Border' : ''} Color-Circle`}
											style={{ backgroundColor: colorValues?.secondaryPopupColor }}>
											<input type="color"
												value={colorValues?.secondaryPopupColor}
												name='secondaryPopupColor'
												onChange={handleDesignColors}
											/>
										</label>
										<span className='Color-Property'>
											<Stack vertical>
												<div className="color-field-2">
													<div className="Polaris-Labelled__LabelWrapper">
														<div className="Polaris-Label">
															<label htmlFor="secondaryColor" className="Polaris-Label__Text">
																<span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">Secondary Popup Color</span>
															</label>
														</div>
													</div>
													<div className="Polaris-Connected">
														<div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
															<div className="Polaris-TextField Polaris-TextField--hasValue">
																<input id="primaryColor"
																	autoComplete="off"
																	className="Polaris-TextField__Input"
																	type="text"
																	aria-labelledby="PolarisTextField1Label"
																	aria-invalid="false"
																	value={colorValues?.secondaryPopupColor}
																	name="secondaryPopupColor"
																	onChange={handleDesignColors}
																/>
																<div className="Polaris-TextField__Backdrop">
																</div>
															</div>
														</div>
													</div>
												</div>
											</Stack>
										</span>
									</Stack>

									<Stack>
										<label
											className={`${colorValues?.primaryPopupText === '#FFFFFF' ? 'Color-Circle-Border' : ''} Color-Circle`}
											style={{ backgroundColor: colorValues?.primaryPopupText }}>
											<input type="color"
												value={colorValues?.primaryPopupText}
												name='primaryPopupText'
												onChange={handleDesignColors}
											/>
										</label>
										<span className='Color-Property'>
											<Stack vertical>
												<div className="color-field-3">
													<div className="Polaris-Labelled__LabelWrapper">
														<div className="Polaris-Label">
															<label htmlFor="primaryText" className="Polaris-Label__Text">
																<span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">Primary Text Color</span>
															</label>
														</div>
													</div>
													<div className="Polaris-Connected">
														<div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
															<div className="Polaris-TextField Polaris-TextField--hasValue">
																<input id="primaryText"
																	autoComplete="off"
																	className="Polaris-TextField__Input"
																	type="text"
																	aria-labelledby="PolarisTextField1Label"
																	aria-invalid="false"
																	value={colorValues?.primaryPopupText}
																	name="primaryPopupText"
																	onChange={handleDesignColors}
																/>
																<div className="Polaris-TextField__Backdrop">
																</div>
															</div>
														</div>
													</div>
												</div>
											</Stack>
										</span>
									</Stack>

									<Stack>
										<label
											className={`${colorValues?.secondaryPopupText === '#ffffff' ? 'Color-Circle-Border' : ''} Color-Circle`}
											style={{ backgroundColor: colorValues?.secondaryPopupText }}>
											<input type="color"
												value={colorValues?.secondaryPopupText}
												name='secondaryPopupText'
												onChange={handleDesignColors}
											/>
										</label>
										<span className='Color-Property'>
											<Stack vertical>
												<div className="color-field-2">
													<div className="Polaris-Labelled__LabelWrapper">
														<div className="Polaris-Label">
															<label htmlFor="secondaryText" className="Polaris-Label__Text">
																<span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">Secondary Popup Color</span>
															</label>
														</div>
													</div>
													<div className="Polaris-Connected">
														<div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
															<div className="Polaris-TextField Polaris-TextField--hasValue">
																<input id="secondaryText"
																	autoComplete="off"
																	className="Polaris-TextField__Input"
																	type="text"
																	aria-labelledby="PolarisTextField1Label"
																	aria-invalid="false"
																	value={colorValues?.secondaryPopupText}
																	name="secondaryPopupText"
																	onChange={handleDesignColors}
																/>
																<div className="Polaris-TextField__Backdrop">
																</div>
															</div>
														</div>
													</div>
												</div>
											</Stack>
										</span>
									</Stack>
									<br />
									<Button plain>Reset colors to original values</Button>

								</div>



							</Layout.Section>
							<Layout.Section oneHalf>
								<div className='preview-part'>
									<Text variant="bodyMd" as="p" color="subdued">
										Preview
									</Text>
									
									<div className='preview-placeholder'>
										<div className='preview-holder'>
											<div className='popup-card-holder id1'>
												<div className="Polaris-Card popup-card-wrapper">
													<div className="Polaris-MediaCard">
														<div className="Polaris-MediaCard__MediaContainer">
															<img
																alt=""
																src={popupImg}
															/>
														</div>
														<div className="Polaris-MediaCard__InfoContainer">
															<div className="Polaris-Card__Section">
																<div class="Polaris-Banner__Dismiss">
																	<button class="Polaris-Button Polaris-Button--plain Polaris-Button--iconOnly" aria-label="Dismiss notification" type="button">
																		<span class="Polaris-Button__Content">
																			<span class="Polaris-Button__Icon">
																				<span class="Polaris-Icon">
																					<span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--regular Polaris-Text--visuallyHidden">
																					</span>
																					<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
																						<path d="M6.707 5.293a1 1 0 0 0-1.414 1.414l3.293 3.293-3.293 3.293a1 1 0 1 0 1.414 1.414l3.293-3.293 3.293 3.293a1 1 0 0 0 1.414-1.414l-3.293-3.293 3.293-3.293a1 1 0 0 0-1.414-1.414l-3.293 3.293-3.293-3.293Z">
																						</path>
																					</svg>
																				</span>
																			</span>
																		</span>
																	</button>
																</div>
																<div className="Polaris-Stack Polaris-Stack--vertical Polaris-Stack--spacingTight">
																	<div className="Polaris-Stack__Item">
																		<div className="Polaris-MediaCard__Heading">
																			<h2 className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--semibold">Anna</h2>
																		</div>
																	</div>
																	<div className="Polaris-Stack__Item">
																		<p>From USA, bought this</p>
																		<small>2 Minutes Ago</small>
																	</div>
																	<div className="Polaris-Stack__Item">
																		<div className="Polaris-MediaCard__ActionContainer">
																			<div className="Polaris-ButtonGroup">
																				<div className="Polaris-ButtonGroup__Item">
																					<div className="Polaris-MediaCard__PrimaryAction">
																						<button className="Polaris-Button" type="button">
																							<span className="Polaris-Button__Content">
																								<span className="Polaris-Button__Text">USD 39.99</span>
																							</span>
																						</button>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<Text variant="bodyMd" as="p" style={{ textAlign: "center" }}>
										Shopify POS is the easiest way to sell your products in person.
										Available for iPad, iPhone, and Android.
									</Text>
								</div>
							</Layout.Section>
						</Layout>
					</div>

				</Card>




				<PageActions
					primaryAction={{
						content: 'Save changes',
					}}
				/>
			</Page>
		</div>
	)
}
