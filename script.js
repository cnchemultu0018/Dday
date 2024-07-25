document.addEventListener('DOMContentLoaded', function() {
    // 디데이 날짜 설정 (YYYY-MM-DD 형식)
    const ddayDate = new Date('2024-10-12');

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = ddayDate.getTime() - currentDate.getTime();

        // 일, 시간, 분, 초 계산
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // HTML 업데이트
        const countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = `D-${days}일`;
    }

    // 초기 호출
    updateCountdown();

    // 1초마다 업데이트
    setInterval(updateCountdown, 1000);
});