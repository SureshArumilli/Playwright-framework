
import { test, expect } from '../../fixtures/hooks-fixture';
import apipathData from '../../data/api-data/api-path-data.json';
import restfulApiData from '../../data/api-data/restful-booker-api-module-data.json';


/* test('[Restful-Booker>Booking] verify that the user ia able to fetch aall the booking IDS using GET API and recive valid response', {

    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: 'https://dev.azure.com/wishinifinite/edit-01'
    }
}, async ({ request }) => {

    const bookingIdsResp = await request.get('booking');
    const bookingIdsJsonResp = await bookingIdsResp.json()
    console.log(bookingIdsJsonResp);
    expect(bookingIdsResp.status()).toBe(200);
    expect(bookingIdsResp.statusText()).toBe('OK');
    expect(bookingIdsResp.ok()).toBeTruthy();
    expect(bookingIdsJsonResp).not.toBeNull();
    expect(bookingIdsResp.headers()['content-type']).toBe('application/json; charset=utf-8');

}) */


test('Id -8 [Restful-Booker>Booking] verify that the user is able to fetch all the booking IDS using GET API and recive valid response', {

    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: 'https://dev.azure.com/wishinifinite/edit-08'
    }
}, async ({ request }) => {

    const bookingIdsResp = await request.get(apipathData.booking_path);
    const bookingIdsJsonResp = await bookingIdsResp.json()
    console.log(bookingIdsJsonResp);
    expect(bookingIdsResp.status()).toBe(200);
    expect(bookingIdsResp.statusText()).toBe('OK');
    expect(bookingIdsResp.ok()).toBeTruthy();
    expect(bookingIdsJsonResp).not.toBeNull();
    expect(bookingIdsResp.headers()['content-type']).toBe(restfulApiData.content_type);

})


test('Id-9 [Restful-Booker>Booking] verify that the user is able to fetch the booking IDS using GET API and recive valid response', {

    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: 'https://dev.azure.com/wishinifinite/edit-09'
    }
}, async ({ request }) => {

    const bookingIdsResp = await request.get(`${apipathData.booking_path}/${restfulApiData.booking_id}`);
    const bookingIdsJsonResp = await bookingIdsResp.json()
    console.log(bookingIdsJsonResp);
    expect(bookingIdsResp.status()).toBe(200);
    expect(bookingIdsResp.statusText()).toBe('OK');
    expect(bookingIdsResp.ok()).toBeTruthy();
    expect(bookingIdsJsonResp).not.toBeNull();
    expect(bookingIdsResp.headers()['content-type']).toBe(restfulApiData.content_type);
    expect(bookingIdsJsonResp.firstname).toEqual(restfulApiData.firstname)

})


test('Id-10 [Restful-Booker>Booking] verify that the user is able to fetch the booking IDS using post API and recive valid response', {

    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: 'https://dev.azure.com/wishinifinite/edit-10'
    }
}, async ({ request }) => {
    const createbookingResp = await request.post(apipathData.booking_path, {
        data: restfulApiData.create_booking
    })

    const createbookingRespJson = await createbookingResp.json();
    console.log(createbookingRespJson);
    expect(createbookingResp.status()).toBe(200);
    expect(createbookingRespJson.booking).toMatchObject(restfulApiData.create_booking)



})

test('Id-11 [Restful-Booker>Booking] verify that the user is able to the existing booking using put API and recive valid response', {

    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: 'https://dev.azure.com/wishinifinite/edit-10'
    }
}, async ({ request, commonApiUtils }) => {
    const apiToken = await commonApiUtils.createToken();
    const updatebookingResp = await request.put(`${apipathData.booking_path}/${restfulApiData.booking_id2}`, {
        headers: {
            Cookie: `token=${apiToken}`
        },
        data: restfulApiData.update_booking
    })
    const updatebookingRespJson = await updatebookingResp.json();
    console.log(updatebookingRespJson);
    expect(updatebookingResp.status()).toBe(200);
    expect(updatebookingRespJson).toMatchObject(restfulApiData.update_booking)

})

test('Id-12 [Restful-Booker>Booking] verify that the user is able to partially update existing booking using put API and recive valid response', {

    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: 'https://dev.azure.com/wishinifinite/edit-10'
    }
}, async ({ request, commonApiUtils }) => {
    const apiToken = await commonApiUtils.createToken();
    const partiallyUpdateBookingResp = await request.patch(`${apipathData.booking_path}/${restfulApiData.booking_id2}`, {
        headers: {
            Cookie: `token=${apiToken}`
        },
        data: restfulApiData.partially_update_booking
    })
    const partiallyUpdatebookingRespJson = await partiallyUpdateBookingResp.json();
    console.log(partiallyUpdatebookingRespJson);
    expect(partiallyUpdateBookingResp.status()).toBe(200);
    expect(partiallyUpdatebookingRespJson.firstname).toMatch(restfulApiData.partially_update_booking.firstname);
    expect(partiallyUpdatebookingRespJson.lastname).toMatch(restfulApiData.partially_update_booking.lastname);

})

test('Id-13 [Restful-Booker>Booking] verify that the user is able to delete existing booking using put API and recive valid response', {

    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: 'https://dev.azure.com/wishinifinite/edit-10'
    }
}, async ({ request, commonApiUtils }) => {
    const apiToken = await commonApiUtils.createToken();
    const deleteBookingResp = await request.delete(`${apipathData.booking_path}/${restfulApiData.booking_id3}`, {
        headers: {
            Cookie: `token=${apiToken}`
        }
       
    })
    
    expect(deleteBookingResp.status()).toBe(201);
    expect(deleteBookingResp.statusText()).toBe('Created');
    const getBookingResp = await request.get(`${apipathData.booking_path}/${restfulApiData.booking_id3}`);
    expect(getBookingResp.status()).toBe(404);
    expect(getBookingResp.statusText()).toBe("Not Found")
    
})
 


